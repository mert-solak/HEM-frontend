import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from '@interfaces/equipment.interface';
import { EquipmentService } from '@services/equipment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  equipment: Observable<Equipment>;
  id: number;

  constructor(private _route: ActivatedRoute, private _equipmentService: EquipmentService) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.equipment = this._equipmentService.getEquipment({ id: params.equipmentId });
    });
  }
}
