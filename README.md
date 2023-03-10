# 馃殌 Introduccion Angular Js v15

## Tabla de contenido

- [Documentaci贸n Node Js](#documentaci贸n-node-js)
- [Instalaci贸n CLI Angular Js](#instalaci贸n-cli-angular-js)
- [Creaci贸n del Proyecto](#creaci贸n-del-proyecto)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Crear Componentes y M贸dulos](#crear-componentes-y-m贸dulos)
- [Acordarse de que los M贸dulos se importan en app.modules.ts](#acordarse-de-que-los-m贸dulos-se-importan-en-appmodulests)
- [Acordarse de declarar y exportar los componentes con su m贸dulo correspondiente](#acordarse-de-declarar-y-exportar-los-componentes-con-su-m贸dulo-correspondiente)
- [! Recordar Importar el RouterModule en cada modulo en que se vaya a usar el Enrrutado 隆](#recordar-importar-el-routermodule-en-cada-m贸dulo-en-que-se-vaya-a-usar-el-enrrutado)

Para comenzar a usar Angular Js es necesario tener instalado Node Js , a continuaci贸n se adjunta documento para instalaro.

## Documentaci贸n Node Js

[Node Js](https://nodejs.org/en/download/)

Se recomienda instalar la versi贸n LTS

## Instalaci贸n CLI Angular Js

Para comenzar a utilizar Angular es necesario intalar de manera global el CLI de Angular, esto permitir谩 crear los proyectos y sus respectivos componentes, m贸dulos, etc.

```bash
  npm install -g @angular/cli
```

## Creaci贸n del Proyecto

```bash
  ng new "nombre-del-proyecto"
```

- Cambiar "nombre-del-proyecto" por el nombre que desea para iniciar su proyecto

## Ejecutar el Proyecto

```bash
  ng serve -o
```

- La bandera " -o " es para observar los cambios que se hacen en el proyecto y actualizarlo autom谩ticamente, gracias a esto no tenemos que ejecutar el comando manualmente cada vez que modificamos algo.

## Crear Componentes y M贸dulos

**Crear Componente**

```bash
  ng generate componentes "nombre-del-componente"
```

```bash
ng g c "nombre-del-componente"

```

**Para crear componentes sin Tests y sin componete de stylos**

```bash
ng g c "nombre-del-componente" --skip-tests --inline-style

```

**Crear M贸dulos**

```bash
  ng generate modulos "nombre-del-moudlo"
```

```bash
ng g m "nombre-del-modulo"

```

## Acordarse de que los M贸dulos se importan en app.modules.ts

- Supongamos que creamos el m贸dulo "Shared", entonces lo importamos en [ imports: ] de app.modules.ts

```javascript
@NgModule({

  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],

})
```

## Acordarse de declarar y exportar los componentes con su m贸dulo correspondiente

- Supongamos que creamos un componente "Login", entonces lo declaramos en [ declarations: ] de su m贸dulo y luego lo exportamos en [ exports: ] para que asi se pueda visualizar en el resto de la aplicaci贸n.

```javascript
@NgModule({

  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule],

})
```

# Pasos para Routing o Rutas en Angular

### Crear Modulo app-routing.module.ts

```bash
  ng g m appRouting --flat
```

### Crear Rutas

```javascript
const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "formularios",
    component: FormulariosComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
```

### Importar el RouterModule y agregarle las rutras raices

```javascript
imports: [CommonModule, RouterModule.forRoot(routes)],
```

### Exportar el RouterModule

```javascript
 exports: [RouterModule],

```

- ###### Recordar Importar el RouterModule en cada m贸dulo en que se vaya a usar el Enrrutado

Ejemplo en el SharedModule :

```javascript
 imports: [RouterModule],

```

### Crear nuevos modulos dentro del modulo formulario para enrrutar dentro de este,

###### A estoy le llamamos rutas hijas

- Crear modulo routing para el formulario

```bash
  ng g m appRouting --flat
```

#### Crear Rutas y rutas hijas

```javascript
const routesHijas: Routes = [
  {
    path: "formulariosTemplate",
    component: FormulariosTemplateComponent,
    children: [
      {
        path: "formulariosTemplate/basicos",
        component: BasicosComponent,
      },
      {
        path: "formulariosTemplate/dinamicos",
        component: DinamicosComponent,
      },
      {
        path: "**",
        redirectTo: "basicos",
      },
    ],
  },
];
```

### Importar el RouterModule y agregarle las rutras hijas

```javascript
imports: [CommonModule, RouterModule.forChild(routesHijas)],
```

### Exportar el RouterModule

```javascript
 exports: [RouterModule],

```
