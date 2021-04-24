import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DefaultLayoutComponent } from '@layouts/default-layout/default-layout.component';
import { DefaultLayoutRoutingModule } from '@layouts/default-layout/default-layout-routing.module';
import { HeaderComponent } from '@components/header/header.component';
import { ProgressSpinnerComponent } from '@components/progress-spinner/progress-spinner.component';
import { SharedModule } from '@shared/shared.module';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent, SidebarComponent, ProgressSpinnerComponent],
  imports: [DefaultLayoutRoutingModule, MatProgressSpinnerModule, MatSnackBarModule, SharedModule],
  exports: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {}
