import { NgModule } from '@angular/core';

import { EquipmentComponent } from '@pages/equipments/equipment/equipment.component';
import { EquipmentsComponent } from '@pages/equipments/equipments.component';
import { EquipmentsRoutingModule } from '@pages/equipments/equipments-routing.module';

import { EquipmentFormComponent } from '@components/equipment-form/equipment-form.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [EquipmentsComponent, EquipmentComponent, EquipmentFormComponent],
  imports: [SharedModule, EquipmentsRoutingModule],
  entryComponents: [EquipmentFormComponent],
})
export class EquipmentsModule {}
