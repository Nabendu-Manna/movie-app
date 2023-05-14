import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


let matModuleList = [
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule
]
let formsModuleList = [
  ReactiveFormsModule,
  FormsModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...matModuleList,
    ...formsModuleList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
