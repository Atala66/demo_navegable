import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestPasswordFormComponent } from './test-password-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: TestPasswordFormComponent }
];


@NgModule({
  declarations: [TestPasswordFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  //  RouterModule.forChild(routes)
  ],
  exports: [
    TestPasswordFormComponent
  ]
})
export class TestPasswordFormModule { }
