import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestFormViewComponent } from './test-form-view.component';
import { TestFormModule } from 'src/app/components/anjana-forms/test-forms/test-form.module';
import { TestPasswordFormModule } from 'src/app/components/anjana-forms/test-password-form/test-password-form.module';
import { SidebarNavigationModule } from 'src/app/components/sidebar-navigation/sidebar-navigation.module';
import { TestFormComponent } from 'src/app/components/anjana-forms/test-forms/test-form.component';
import { TestPasswordFormComponent } from 'src/app/components/anjana-forms/test-password-form/test-password-form.component';
import { HelperService } from './helper.service';

const routes: Routes = [
  {path: '', component: TestFormViewComponent }
];


@NgModule({
  declarations: [TestFormViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SidebarNavigationModule,
    TestFormModule,
    TestPasswordFormModule,
  ],
  exports: [
    TestFormViewComponent
  ],
  providers: [
    HelperService
  ]
})
export class TestFormViewModule { }