import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicsComponent } from '@pages/clinics/clinics.component';
import { ClinicComponent } from '@pages/clinics/clinic/clinic.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicsComponent,
  },
  { path: 'clinic', component: ClinicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicsRoutingModule {}
