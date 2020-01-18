import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form-view',
  templateUrl: './test-form-view.component.html',
  styleUrls: ['./test-form-view.component.less']
})
export class TestFormViewComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) {
    this.signupForm = this.formBuilder.group({
      password: [],
      profile: []
    });
  }

  ngOnInit() {  }

  submit() {
    console.log(this.signupForm.value);
  }
}
