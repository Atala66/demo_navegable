import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPasswordFormComponent } from './test-password-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TestPasswordFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TestPasswordFormComponent
  ]
})
export class TestPasswordFormModule { }
