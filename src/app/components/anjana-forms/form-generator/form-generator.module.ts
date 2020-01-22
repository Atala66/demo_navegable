import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormGeneratorComponent } from './form-generator.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
// componentes reutilizables
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { SelectComponent } from './components/select/select.component';
// directiva
import { DynamicFieldDirective } from './dynamic-field.directive';

const routes: Routes = [
   {path: '', component: FormGeneratorComponent }
];

@NgModule({
  declarations: [
    DynamicFieldDirective,
    FormGeneratorComponent,
    InputTextComponent,
    InputNumberComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormGeneratorComponent
  ],
  entryComponents: [
    InputTextComponent,
    InputNumberComponent,
    SelectComponent
  ],
})
export class FormGeneratorModule { }
