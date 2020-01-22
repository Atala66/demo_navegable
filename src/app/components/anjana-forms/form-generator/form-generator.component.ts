import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.less']
})
export class FormGeneratorComponent implements OnInit {
  // nuestro config acepta un array de objetos
 @Input() config: any[] = [];  // esto sera un modelo
 public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.generateFormGroup();
  }


  public generateFormGroup() {
      const group = this.fb.group({});
      this.config.forEach( control => group.addControl(control.name, this.createControl(control)));
      return group;
    }


  createControl( config ) {
    const { disabled, validations, value } = config;
    return this.fb.control({ disabled, value }, validations);
  }

}
