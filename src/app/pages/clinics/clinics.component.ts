import { Component, OnInit } from '@angular/core';

import { PageEvent } from '@angular/material';

import { ClinicService } from '@services/clinic.service';
import { clinicConfig } from '@configs/clinic.config';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss'],
})
export class ClinicsComponent implements OnInit {
  currentPage = 0;
  pageSize = clinicConfig.pageSize;

  constructor(private _clinicService: ClinicService) {}

  ngOnInit() {
    this._clinicService.getClinics({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    });

    this._clinicService.clinics.subscribe((data) => {
      console.log(data);
    });
  }

  onChangePage(event: PageEvent) {
    this.currentPage = event.pageIndex;

    this._clinicService.getClinics({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    });
  }
}
