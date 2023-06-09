import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';

/**
 * Material Module
 */

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

/**
 * end material
 */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let matModuleList = [
  MatIconModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatExpansionModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatProgressBarModule
]

let formsModuleList = [
  ReactiveFormsModule,
  FormsModule,
]

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    ...matModuleList,
    ...formsModuleList
  ]
})
export class MovieListModule { }
