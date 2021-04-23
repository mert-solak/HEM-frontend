import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatMenuModule],
  exports: [MatFormFieldModule, MatInputModule, MatMenuModule],
})
export class SharedModule {}
