import { isDefined, minLength } from 'class-validator';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialog, PageEvent } from '@angular/material';

import { EquipmentFormComponent } from '@components/equipment-form/equipment-form.component';

import { equipmentConfig } from '@configs/equipment.config';

import { SortableField } from '@interfaces/equipment.interface';

import { showableFields, sortableFields } from '@locals/equipment.local';

import { EquipmentService } from '@services/equipment.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss'],
})
export class EquipmentsComponent implements OnInit {
  currentPage = 0;
  pageSize = equipmentConfig.pageSize;
  render = equipmentConfig.render;

  showableFields = equipmentConfig.showableFields;
  sortableFieldsTexts = sortableFields;
  showableFieldsTexts = showableFields;

  searchFormControl = new FormControl();
  searchTimeout: any;

  constructor(private _equipmentService: EquipmentService, private _dialog: MatDialog) {}

  ngOnInit() {
    this._equipmentService.getEquipments({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    });

    this.searchFormControl.valueChanges.subscribe((value) => {
      if (isDefined(this.searchTimeout)) {
        clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = setTimeout(() => {
        if (!isDefined(value) || !minLength(value, 1)) {
          this._equipmentService.getEquipments({
            limit: this.pageSize,
            offset: this.currentPage * this.pageSize,
          });
          return;
        }

        this._equipmentService.getEquipments({
          limit: this.pageSize,
          offset: this.currentPage * this.pageSize,
          search: [value],
        });
      }, equipmentConfig.searchDelayMilisecond);
    });
  }

  onChangePage(event: PageEvent) {
    this.currentPage = event.pageIndex;

    this._equipmentService.getEquipments({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
    });
  }

  onSortByChange(sortBy: SortableField) {
    this._equipmentService.getEquipments({
      limit: this.pageSize,
      offset: this.currentPage * this.pageSize,
      sortBy,
      sortOrder: 'ASC',
    });
  }

  onClickAddButton() {
    this._dialog.open(EquipmentFormComponent);
  }
}
