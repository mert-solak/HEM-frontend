import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Clinic } from '@interfaces/clinic.interface';

import { ClinicService } from '@services/clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
})
export class ClinicComponent implements OnInit {
  clinic: Observable<Clinic>;
  id: number;

  constructor(private _route: ActivatedRoute, private _clinicService: ClinicService) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.clinic = this._clinicService.getClinic({ id: params.clinicId });
    });
  }
}
