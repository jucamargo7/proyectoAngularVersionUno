import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngularModule } from './modulos/material-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    ToolbarComponent,
    AbmAlumnosComponent,
    ListAlumnosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
