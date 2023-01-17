import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [
  {
    path: 'formularios/formulariosTemplate',
    loadChildren: () =>
      import(
        './formularios/formularios-template/formularios-template.module'
      ).then((module) => module.FormulariosTemplateModule),
  },
  {
    path: 'formularios/formulariosReactive',
    loadChildren: () =>
      import(
        './formularios/formularios-reactive/formulario-reactive.module'
      ).then((module) => module.FormularioReactiveModule),
  },
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'formularios',
    component: FormulariosComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
