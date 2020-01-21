import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TestFormService } from './test-form.service';

@Component({
  selector: 'app-test-form-view',
  templateUrl: './test-form-view.component.html',
  styleUrls: ['./test-form-view.component.less']
})
export class TestFormViewComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
   // private formBuilder: FormBuilder
      private  testFormSrv: TestFormService
    ) {
      // this.signupForm = this.formBuilder.group({
      //   password: [],
      //   profile: []
      // });
  }

  ngOnInit() {
    this.getFormServiceData();
  }

  public getFormServiceData() {
    this.testFormSrv.getMockFormGenerator().subscribe(
      (response) => {
        console.log('response::', response);
      },
      error => {
        console.log('response::', error);
      }
    );
  }



  // submit() {
  //   console.log(this.signupForm.value);
  // }
}
