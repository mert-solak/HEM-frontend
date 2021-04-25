import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clinics',
    loadChildren: () => import(`@pages/clinics/clinics.module`).then((m) => m.ClinicsModule),
  },
  {
    path: 'equipments',
    loadChildren: () => import(`@pages/equipments/equipments.module`).then((m) => m.EquipmentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DefaultLayoutRoutingModule {}
