import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsComponent } from '@pages/clinics/clinic/equipments/equipments.component';
import { EquipmentsRoutingModule } from '@pages/clinics/clinic/equipments/equipments-routing.module';

@NgModule({
  declarations: [EquipmentsComponent],
  imports: [CommonModule, EquipmentsRoutingModule],
})
export class EquipmentsModule {}
