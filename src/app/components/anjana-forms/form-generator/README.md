
# INPUT DEL DYNAMIC FORM():
  - config (): 
  - Aceptará un array de objetos de un modelo determinado y que vendra del backend
  - Cada objeto tendrá mínimo 2 propiedades:
    - TYPE: tipo de campo del formulario; input-text, input-number, select
    - NAME: referencia del campo para el FormControlName

# COMPONENTES INTERNOS:
- Tendremos un componente por cada tipo de campo de formulario  a pintar:
- Cada componente tendrá las propiedades input y group.
- Estos componentes no tendran .module y serán importados en el array de declarations del módulo        principal.

# DIRECTIVA:
- Generamos una directiva sobre la carpeta del form generator principal.
- Esta directiva sae usará como atributo y no como elemento.

# FORM GENERATOR MODULE:
- EntryComponents: Expone la factoria de componentes.
   # @todo() : no deberian estar expuestos en el app.module pero por incompatibilidad con el lazy de momento se quedan ahi


# FORM GENERATOR HTML:
- En el html del form generator para cada campo del config le pasamos la directiva para cada instancia
- Dentro le pasamos this.config y this.group




