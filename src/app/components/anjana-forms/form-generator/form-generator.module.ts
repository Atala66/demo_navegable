import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormGeneratorComponent } from './form-generator.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
   {path: '', component: FormGeneratorComponent }
];

@NgModule({
  declarations: [
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormGeneratorComponent
  ]
})
export class FormGeneratorModule { }
