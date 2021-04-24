import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Clinic } from '@interfaces/clinic.interface';
import { ClinicService } from '@services/clinic.service';
import { clinicConfig } from '@configs/clinic.config';
import { filterObjectWithFilter } from '@helpers/object.helper';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
})
export class ClinicComponent implements OnInit {
  clinic: Observable<Clinic>;
  id: number;
  clinicForm: FormGroup;

  constructor(private _route: ActivatedRoute, private _clinicService: ClinicService) {}

  ngOnInit() {
    this.clinicForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(254)]),
    });

    this._route.params.subscribe((params) => {
      this.clinic = this._clinicService.getClinic({ id: params.clinicId });
      this.clinic.subscribe((data) => {
        const filteredData = filterObjectWithFilter(data, clinicConfig.editableFields);
        this.clinicForm.setValue(filteredData);
        this.id = data.id;
      });
    });
  }

  onSubmitClinicForm() {
    this._clinicService.editClinic({ ...this.clinicForm.value, id: this.id });
  }

  onClickDeleteButton() {
    this._clinicService.deleteClinic({ id: this.id });
  }
}
