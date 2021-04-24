import { Observable } from 'rxjs';
import { isDefined } from '@angular/compiler/src/util';

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Clinic } from '@interfaces/clinic.interface';
import { ClinicService } from '@services/clinic.service';
import { filterObjectWithFilter } from '@helpers/object.helper';
import { clinicConfig } from '@configs/clinic.config';

@Component({
  selector: 'app-clinic-form',
  templateUrl: './clinic-form.component.html',
  styleUrls: ['./clinic-form.component.scss'],
})
export class ClinicFormComponent implements OnInit {
  @Input() clinic: Observable<Clinic>;
  id: number;
  clinicForm: FormGroup;

  constructor(private _clinicService: ClinicService) {}

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
    if (isDefined(this.id)) {
      this._clinicService.editClinic({ ...this.clinicForm.value, id: this.id });
    } else {
      this._clinicService.addClinic({ ...this.clinicForm.value });
    }
  }

  onClickDeleteButton() {
    this._clinicService.deleteClinic({ id: this.id });
  }
}
