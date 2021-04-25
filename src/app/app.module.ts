import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { CustomInterceptor } from '@interceptors/http.interceptor';

import { DefaultLayoutModule } from '@layouts/default-layout/default-layout.module';

import { AppComponent } from 'app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, DefaultLayoutModule, BrowserAnimationsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
