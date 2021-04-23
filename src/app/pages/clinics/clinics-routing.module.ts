import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicsComponent } from '@pages/clinics/clinics.component';
import { ClinicComponent } from '@pages/clinics/clinic/clinic.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicsComponent,
  },
  {
    path: ':clinicId',
    children: [
      { path: '', component: ClinicComponent },
      {
        path: 'equipments',
        loadChildren: () =>
          import(`@pages/clinics/clinic/equipments/equipments.module`).then((m) => m.EquipmentsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicsRoutingModule {}
