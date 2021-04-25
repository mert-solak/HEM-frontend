import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentComponent } from '@pages/equipments/equipment/equipment.component';
import { EquipmentsComponent } from '@pages/equipments/equipments.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentsComponent,
  },
  {
    path: ':equipmentId',
    component: EquipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentsRoutingModule {}
