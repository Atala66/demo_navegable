import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl, Validators } from '@angular/forms';
import { TestFormService } from './test-form.service';

@Component({
  selector: 'app-test-form-view',
  templateUrl: './test-form-view.component.html',
  styleUrls: ['./test-form-view.component.less']
})
export class TestFormViewComponent implements OnInit {
  signupForm: FormGroup;
  public config: any[];

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
          this.config = response.data;
          console.log('response::', this.config);
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
