import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicsComponent } from '@pages/clinics/clinics.component';
import { ClinicComponent } from './clinic/clinic.component';

import { ClinicsRoutingModule } from '@pages/clinics/clinics-routing.module';

@NgModule({
  declarations: [ClinicsComponent, ClinicComponent],
  imports: [CommonModule, ClinicsRoutingModule],
})
export class ClinicsModule {}
