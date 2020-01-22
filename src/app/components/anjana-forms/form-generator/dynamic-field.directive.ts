import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit
} from "@angular/core";
import { FormGroup } from "@angular/forms";
// components
import { InputNumberComponent } from "./components/input-number/input-number.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { SelectComponent } from "./components/select/select.component";

// objeto componentes para el factory
const components = {
  inputNumber: InputNumberComponent,
  inputText: InputTextComponent,
  select: SelectComponent
};

@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;
  @Input() group: FormGroup;

  component;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    // si el tipo de componente no existe en el objeto
    if(!components[this.config.type]) {
      console.log('no existe el tipo de componente especificado');
    }
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    // crea el cmp a traves de la factoria
    this.component = this.container.createComponent(factory);
    // pasale la config y el gupo
    this.component.instance.group = this.group;
    this.component.instance.config = this.config;

}
}
