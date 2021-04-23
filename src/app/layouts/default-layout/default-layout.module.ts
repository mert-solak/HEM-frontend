import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutComponent } from '@layouts/default-layout/default-layout.component';
import { HeaderComponent } from '@components/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { DefaultLayoutRoutingModule } from '@layouts/default-layout/default-layout-routing.module';

@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, DefaultLayoutRoutingModule, SharedModule, MatListModule, MatIconModule],
  exports: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {}
