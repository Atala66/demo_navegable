import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from './test-form.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
   {path: '', component: TestFormComponent }
];

@NgModule({
  declarations: [
    TestFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // RouterModule.forChild(routes)
  ],
  exports: [
    TestFormComponent
  ]
})
export class TestFormModule { }
