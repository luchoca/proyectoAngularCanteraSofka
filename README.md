# Introduccion Angular Js v15

## Tabla de contenido
* [Documentación Node Js](#documentación-node-js)
* [Instalación CLI Angular Js](#instalación-cli-angular-js)
* [Creación del Proyecto](#creación-del-proyecto)
* [Ejecutar el Proyecto](#ejecutar-el-proyecto)
* [Crear Componentes y Módulos](#crear-componentes-y-módulos)
* [Acordarse de que los Módulos se importan en app.modules.ts](#acordarse-de-que-los-módulos-se-importan-en-appmodulests)
* [Acordarse de declarar y exportar los componentes con su módulo correspondiente](#acordarse-de-declarar-y-exportar-los-componentes-con-su-módulo-correspondiente)

Para comenzar a usar Angular Js es necesario tener instalado Node Js , a continuación se adjunta documento para instalaro.

## Documentación Node Js

[Node Js](https://nodejs.org/en/download/)

Se recomienda instalar la versión LTS

## Instalación CLI Angular Js

Para comenzar a utilizar Angular es necesario intalar de manera global el CLI de Angular, esto permitirá crear los proyectos y sus respectivos componentes, módulos, etc.

```bash
  npm install -g @angular/cli
```

## Creación del Proyecto

```bash
  ng new "nombre-del-proyecto"
```

* Cambiar "nombre-del-proyecto" por el nombre que desea para iniciar su proyecto

## Ejecutar el Proyecto

```bash
  ng serve -o
```

* La bandera " -o " es para observar los cambios que se hacen en el proyecto y actualizarlo automáticamente, gracias a esto no tenemos que ejecutar el comando manualmente cada vez que modificamos algo.

## Crear Componentes y Módulos

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

**Crear Módulos**

```bash
  ng generate modulos "nombre-del-moudlo"
```

```bash
ng g m "nombre-del-modulo"

```

## Acordarse de que los Módulos se importan en app.modules.ts

* Supongamos que creamos el módulo "Shared", entonces lo importamos en [ imports: ] de app.modules.ts

```javascript
@NgModule({

  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],

})
```

## Acordarse de declarar y exportar los componentes con su módulo correspondiente

* Supongamos que creamos un componente "Login", entonces lo declaramos en [ declarations: ] de su módulo y luego lo exportamos en [ exports: ] para que asi se pueda visualizar en el resto de la aplicación.

```javascript
@NgModule({

  declarations: [LoginComponent, SidebarComponent],
  exports: [LoginComponent, SidebarComponent],
  imports: [CommonModule],

})
```