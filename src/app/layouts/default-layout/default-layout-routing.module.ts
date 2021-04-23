import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentsComponent } from '@pages/equipments/equipments.component';

const routes: Routes = [
  {
    path: 'clinics',
    loadChildren: () => import(`@pages/clinics/clinics.module`).then((m) => m.ClinicsModule),
  },
  { path: 'equipments', component: EquipmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DefaultLayoutRoutingModule {}
