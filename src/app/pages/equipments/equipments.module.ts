import { NgModule } from '@angular/core';

import { EquipmentsComponent } from '@pages/equipments/equipments.component';
import { EquipmentsRoutingModule } from '@pages/equipments/equipments-routing.module';

@NgModule({
  declarations: [EquipmentsComponent],
  imports: [EquipmentsRoutingModule],
})
export class EquipmentsModule {}
