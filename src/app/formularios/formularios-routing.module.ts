import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios.component';
import { FormulariosTemplateComponent } from './formularios-template/formularios-template.component';
import { FormulariosReactiveComponent } from './formularios-reactive/formularios-reactive.component';

const routes: Routes = [
  {
    path: 'formularios',
    component: FormulariosComponent,
    children: [
      {
        path: 'formulariosTemplate',
        component: FormulariosTemplateComponent,
      },
      {
        path: 'formulariosReactive',
        component: FormulariosReactiveComponent,
      },
      {
        path: '**',
        redirectTo: 'formularios',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosRoutingModule {}
