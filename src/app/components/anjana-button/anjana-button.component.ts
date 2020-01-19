import { Component, Input, OnInit } from '@angular/core';
import { ButtonConfig, ButtonColor, Type } from './anjana-button.model';

@Component({
  selector: 'app-anjana-button',
  templateUrl: './anjana-button.component.html',
  styleUrls: ['./anjana-button.component.less']
})
export class AnjanaButtonComponent implements OnInit {
  @Input() config: ButtonConfig;

  className: string;
  public type: string;
  constructor() {}

  ngOnInit() {
    switch (this.config.color) {
      case ButtonColor.PRIMARY:
        this.className = 'nwe_btn-primary';
        break;

      case ButtonColor.WHITE:
        this.className = 'nwe_btn-white';
        break;

      case ButtonColor.NEGATIVE:
        this.className = 'nwe_btn-prim-neg';
        break;

      case ButtonColor.DEFAULT:
      default:
        this.className = 'nwe_btn-default';
        break;
    }

    switch (this.config.type) {
      case Type.SUBMIT:
        this.type = 'submit';
        break;
      case Type.RESET:
        this.type = 'reset';
        break;
      default:
        this.type = 'button';
        break;
    }

    if (this.config.className) {
      this.className = this.className + ' ' + this.config.className;
    } else {
      this.className = this.className;
    }
  }
}
