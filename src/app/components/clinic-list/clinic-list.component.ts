import { Component, OnInit } from '@angular/core';
import { PageEvent, MatSelectChange } from '@angular/material';

import { ClinicLookupResult, SortableField } from 'app/types/clinic.type';
import { ClinicService } from '@services/clinic.service';
import { clinicConfig } from '@configs/clinic.config';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss'],
})
export class ClinicListComponent implements OnInit {
  clinics: ClinicLookupResult = {
    count: 0,
    rows: [],
  };
  currentPage = 0;
  pageSize: number = clinicConfig.pageSize;
  sortBy: SortableField;

  constructor(private clinicService: ClinicService) {}

  onPageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;

    this.clinicService.getClinics({ offset: this.currentPage * this.pageSize, limit: this.pageSize });
  }

  onSortByChange(event: MatSelectChange) {
    this.sortBy = event.value;

    this.clinicService.getClinics({
      offset: this.currentPage * this.pageSize,
      limit: this.pageSize,
      sortBy: 'name',
      sortOrder: 'ASC',
    });
  }

  ngOnInit() {
    this.clinicService.getClinics({ offset: this.currentPage, limit: this.pageSize });

    this.clinicService.clinicsSubject.subscribe((data) => {
      this.clinics = { ...data };
    });
  }
}
