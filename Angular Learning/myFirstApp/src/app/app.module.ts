import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoCComponent } from './demo-c/demo-c.component';
import { DemoC123Component } from './demo-c123/demo-c123.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoC123Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
