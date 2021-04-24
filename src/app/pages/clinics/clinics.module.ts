import { NgModule } from '@angular/core';

import { ClinicComponent } from '@pages/clinics/clinic/clinic.component';
import { ClinicsComponent } from '@pages/clinics/clinics.component';
import { ClinicsRoutingModule } from '@pages/clinics/clinics-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ClinicsComponent, ClinicComponent],
  imports: [SharedModule, ClinicsRoutingModule],
})
export class ClinicsModule {}
