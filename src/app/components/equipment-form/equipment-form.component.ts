import * as moment from 'moment';
import { Observable } from 'rxjs';
import { isDefined, minLength } from 'class-validator';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';

import { equipmentConfig } from '@configs/equipment.config';

import { Equipment } from '@interfaces/equipment.interface';

import { filterObjectWithFilter } from '@helpers/object.helper';
import { getErrorFieldName } from '@helpers/error.helper';

import { ClinicService } from '@services/clinic.service';
import { EquipmentService } from '@services/equipment.service';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.scss'],
})
export class EquipmentFormComponent implements OnInit {
  @Input() equipment: Observable<Equipment>;
  id: number;
  equipmentForm: FormGroup;
  getErrorFieldName = getErrorFieldName;
  clinicTimeout: any;
  clinicId: number;
  render = equipmentConfig.render;

  constructor(
    private _equipmentService: EquipmentService,
    private _clinicService: ClinicService,
    private _router: Router,
    private _dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.equipmentForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(254)]),
      price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      receiptDate: new FormControl(null),
      usageRatio: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      clinic: new FormControl(null, [Validators.required, Validators.min(1)]),
    });

    this.equipmentForm.get('clinic').valueChanges.subscribe((value) => {
      if (!isDefined(value) || !minLength(value, 1)) {
        return;
      }

      if (isDefined(this.clinicTimeout)) {
        clearTimeout(this.clinicTimeout);
      }

      this.clinicTimeout = setTimeout(() => {
        this._clinicService.getClinics({
          search: [value],
        });
      });
    });

    if (!isDefined(this.equipment)) {
      return;
    }

    this.equipment.subscribe((data) => {
      this.id = data.id;
      const filteredData = filterObjectWithFilter(data, equipmentConfig.editableFields);

      this.equipmentForm.get('name').setValue(filteredData.name);
      this.equipmentForm.get('price').setValue(filteredData.price);
      this.equipmentForm.get('quantity').setValue(filteredData.quantity);
      this.equipmentForm.get('receiptDate').setValue(new Date(filteredData.receiptDate));
      this.equipmentForm.get('usageRatio').setValue(filteredData.usageRatio);
      this.equipmentForm.get('clinic').setValue(filteredData.clinic);
    });
  }

  onSubmitEquipmentForm() {
    if (this.equipmentForm.invalid) {
      return;
    }

    const input = { ...this.equipmentForm.value };
    input.clinicId = this.equipmentForm.value.clinic.id;
    delete input.clinic;

    if (isDefined(this.id)) {
      this._equipmentService.editEquipment({ ...input, id: this.id });
    } else {
      this._equipmentService.addEquipment({ ...input });
    }
    this._router.navigate(['/equipments']);
    this._dialog.closeAll();
  }

  onClickDeleteButton() {
    this._equipmentService.deleteEquipment({ id: this.id });
    this._router.navigate(['/equipments']);
  }

  onChangeReceiptDate(date: Date) {
    this.equipmentForm.get('receiptDate').setValue(moment(date).toISOString());
  }
}
