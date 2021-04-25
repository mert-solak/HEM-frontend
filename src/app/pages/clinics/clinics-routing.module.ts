import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicComponent } from '@pages/clinics/clinic/clinic.component';
import { ClinicsComponent } from '@pages/clinics/clinics.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicsComponent,
  },
  {
    path: ':clinicId',
    component: ClinicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicsRoutingModule {}
