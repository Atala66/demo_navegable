import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarNavigationModule } from 'src/app/components/sidebar-navigation/sidebar-navigation.module';
import { FormGeneratorModule } from 'src/app/components/anjana-forms/form-generator/form-generator.module';
import { TestFormViewComponent } from './test-form-view.component';
// import { TestFormModule } from 'src/app/components/anjana-forms/test-forms/test-form.module';
// import { TestPasswordFormModule } from 'src/app/components/anjana-forms/test-password-form/test-password-form.module';
 // import { TestFormComponent } from 'src/app/components/anjana-forms/test-forms/test-form.component';
 // import { TestPasswordFormComponent } from 'src/app/components/anjana-forms/test-password-form/test-password-form.component';
import { HelperService } from './helper.service';
import { TestFormService } from './test-form.service';
import { FormGeneratorComponent } from 'src/app/components/anjana-forms/form-generator/form-generator.component';


const routes: Routes = [
  {path: '', component: TestFormViewComponent }
];


@NgModule({
  declarations: [TestFormViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarNavigationModule,
    FormGeneratorModule,
    RouterModule.forChild(routes),
     // TestFormModule,
    // TestPasswordFormModule,
  ],
  exports: [
    TestFormViewComponent,
    FormGeneratorComponent
  ],
  providers: [
    HelperService,
    TestFormService
  ]
})
export class TestFormViewModule { }
