import { Component, Input, OnInit } from '@angular/core';
import { momentConfig } from '@configs/moment.config';
import { Clinic } from 'app/types/clinic.type';
import * as moment from 'moment';

@Component({
  selector: 'app-clinic-card',
  templateUrl: './clinic-card.component.html',
  styleUrls: ['./clinic-card.component.scss'],
})
export class ClinicCardComponent implements OnInit {
  @Input() clinic: Clinic;
  avarageEquipmentUsageRatio: number = 0;
  totalEquipmentQuantity: number = 0;
  totalEquipmentPrice: number = 0;
  updatedAt: string;

  constructor() {}

  ngOnInit() {
    this.updatedAt = moment(this.clinic.updatedAt).format(momentConfig.defaultFormat);

    this.clinic.equipments.forEach((equipment) => {
      this.avarageEquipmentUsageRatio += equipment.usageRatio;
      this.totalEquipmentQuantity += equipment.quantity;
      this.totalEquipmentPrice += equipment.price;
    });

    if (this.clinic.equipments.length === 0) {
      return;
    }

    this.avarageEquipmentUsageRatio /= this.clinic.equipments.length;
  }
}
