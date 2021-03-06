import { minLength, isDefined } from 'class-validator';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialog, PageEvent } from '@angular/material';

import { ClinicFormComponent } from '@components/clinic-form/clinic-form.component';

import { ClinicService } from '@services/clinic.service';

import { SortableField } from '@interfaces/clinic.interface';

import { clinicConfig } from '@configs/clinic.config';

import { showableFields, sortableFields } from '@locals/clinic.local';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss'],
})
export class ClinicsComponent implements OnInit {
  currentPage = 0;
  pageSize = clinicConfig.pageSize;
  render = clinicConfig.render;

  showableFields = clinicConfig.showableFields;
  sortableFieldsTexts = sortableFields;
  showableFieldsTexts = showableFields;

  searchFormControl = new FormControl();
  searchTimeout: any;

  constructor(private _clinicService: ClinicService, private _dialog: MatDialog) {}

  ngOnInit() {
    this._clinicService.getClinics({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    });

    this.searchFormControl.valueChanges.subscribe((value) => {
      if (isDefined(this.searchTimeout)) {
        clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = setTimeout(() => {
        if (!isDefined(value) || !minLength(value, 1)) {
          this._clinicService.getClinics({
            limit: this.pageSize,
            offset: this.currentPage * this.pageSize,
          });
          return;
        }

        this._clinicService.getClinics({
          limit: this.pageSize,
          offset: this.currentPage * this.pageSize,
          search: [value],
        });
      }, clinicConfig.searchDelayMilisecond);
    });
  }

  onChangePage(event: PageEvent) {
    this.currentPage = event.pageIndex;

    this._clinicService.getClinics({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    });
  }

  onSortByChange(sortBy: SortableField) {
    this._clinicService.getClinics({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
      sortBy,
      sortOrder: 'ASC',
    });
  }

  onClickAddButton() {
    this._dialog.open(ClinicFormComponent);
  }
}
