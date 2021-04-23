import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicsComponent } from '@pages/clinics/clinics.component';
import { ClinicComponent } from './clinic/clinic.component';

import { ClinicsRoutingModule } from '@pages/clinics/clinics-routing.module';
import { ClinicListComponent } from '../../components/clinic-list/clinic-list.component';
import { ClinicCardComponent } from '../../components/clinic-card/clinic-card.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ClinicsComponent, ClinicComponent, ClinicListComponent, ClinicCardComponent],
  imports: [CommonModule, SharedModule, ClinicsRoutingModule],
})
export class ClinicsModule {}
