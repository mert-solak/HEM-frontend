import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentsComponent } from '@pages/equipments/equipments.component';
import { EquipmentComponent } from '@pages/equipments/equipment/equipment.component';

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
