import { Observable } from 'rxjs';
import { isDefined } from 'class-validator';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';

import { Clinic } from '@interfaces/clinic.interface';

import { ClinicService } from '@services/clinic.service';

import { filterObjectWithFilter } from '@helpers/object.helper';
import { getErrorFieldName } from '@helpers/error.helper';

import { clinicConfig } from '@configs/clinic.config';

@Component({
  selector: 'app-clinic-form',
  templateUrl: './clinic-form.component.html',
  styleUrls: ['./clinic-form.component.scss'],
})
export class ClinicFormComponent implements OnInit {
  @Input() clinic: Observable<Clinic>;
  id: number;
  getErrorFieldName = getErrorFieldName;
  clinicForm: FormGroup;

  constructor(private _clinicService: ClinicService, private _router: Router, private _dialog: MatDialog) {}

  ngOnInit() {
    this.clinicForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(254)]),
    });

    if (!isDefined(this.clinic)) {
      return;
    }

    this.clinic.subscribe((data) => {
      this.id = data.id;
      const filteredData = filterObjectWithFilter(data, clinicConfig.editableFields);
      this.clinicForm.setValue(filteredData);
    });
  }

  onSubmitClinicForm() {
    if (this.clinicForm.invalid) {
      return;
    }

    if (isDefined(this.id)) {
      this._clinicService.editClinic({ ...this.clinicForm.value, id: this.id });
    } else {
      this._clinicService.addClinic({ ...this.clinicForm.value });
    }
    this._dialog.closeAll();
  }

  onClickDeleteButton() {
    this._clinicService.deleteClinic({ id: this.id });
    this._router.navigate(['/clinics']);
  }
}
