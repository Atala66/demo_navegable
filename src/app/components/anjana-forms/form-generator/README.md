
# COMPONENTE HIJOS (  COMPONENTES )

# INPUT DEL DYNAMIC FORM():
  - config (): 
  - Aceptará un array de objetos de un modelo determinado y que vendra del backend
  - Cada objeto tendrá un model con propiedades obligatorias y optativas  (ver form-generator.model.ts)

# COMPONENTES INTERNOS:
- Tendremos un componente por cada tipo de campo de formulario  a pintar:
- Cada componente tendrá las propiedades input y group.
- Estos componentes no tendran .module y serán importados en el array de declarations del módulo principal.

# DIRECTIVA:
- Generamos una directiva sobre la carpeta del form generator principal.
- Esta directiva sae usará como atributo y no como elemento.

# FORM GENERATOR MODULE:
- EntryComponents: Para componentes creados dinámicamente
  Se usan de forma imperativa y no declarativa (no se instancian a traves del selector )
  Expone la factoria de componentes creados dinámicamente a traves del método ViewContainerRef.createComponent()

# FORM GENERATOR HTML:
- En el html del form generator para cada campo del config le pasamos la directiva para cada instancia
- Dentro le pasamos this.config y this.group

 # ------------------------------------------------------------------------------------------------------------------------------------------- # 

# COMPONENTE PADRE ( VISTA )
- Llamamos al servicio que traera la template de back con los campos del formulario.
- Instancia del formulario:
  <app-form-generator *ngIf="config" [config]="config"></app-form-generator>
- MUY IMPORTANTE: Pasarle el ngIf para la response del servicio o intentará renderizar campos de formulario que aún no existen.

# @ to think()
- Formulario integrado dentro de las tabs, para cada step del formulario, pinta 1 tab y muestra en el solo esa parte de formulario.
  Ej: 3 steps = 3 TABS
- El cmp tabs tiene que saber cuantos steps viene del servicio del form. steps.length. PRU: solo tiene que saber cuantas tabs pintar.
- Hay que "cortar" el form cuando se acabe el step:
- Opcion 1:
  Por cada step generamos un <app-form-generator *ngIf="config" [config]="config"></app-form-generator> ?????? 
  Problema: Todo el formulario llega en la misma llamada
  Solucion: Con un if que determina el step number?
- Opcion 2:
  ¿ O solo generamos uno y lo "cortamos" ?
- Tabs y form (hijos) se engancharan al servicio del cmp padre (vista).

  


