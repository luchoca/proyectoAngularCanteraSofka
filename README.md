## Introduccion Angular Js v15

Para comenzar a usar Angular Js es necesario tener instalado el Node Js , a continuacion se adjunta documento para isntalar el mismo

## Documentacion Node Js

[Node Js](https://nodejs.org/en/download/)

Se recomienda istalar la version LTS

## Instalacion CLI Angular Js

Para comenzar a usar Angular es necesario que instalen de mandera global el CLI de angular que le permitira crar los proyectos y sus respectivos componentes, modulos, etc

```bash
  npm install -g @angular/cli
```

## Creacion Proyecto

```bash
  ng new "nombre-del-proyecto"
```

cambiar "nombre-del-proyecto" por el nombre que desea para iniciar su proyecto

## Ejecutar Proyecto

```bash
  ng serve -o
```

La bandera " -o " es para observar los cambios que se hacen en el proyecto y acutalziarlas automaticamente para que no se tenga que ejecutar el comando cada vez que se haga un cambio en el proyecto

## Crear Componentes y Modulos

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

**Crear Módulos de rutas**

```bash
  ng generate modulos "nombre-del-moudlo"
```
