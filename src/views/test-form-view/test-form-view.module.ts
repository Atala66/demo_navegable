import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestFormViewComponent } from './test-form-view.component';


const routes: Routes = [
  {path: '', component: TestFormViewComponent }
];


@NgModule({
  declarations: [TestFormViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestFormViewModule { }
