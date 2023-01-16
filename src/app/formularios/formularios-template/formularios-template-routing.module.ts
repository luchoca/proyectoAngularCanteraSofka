import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { FormulariosTemplateComponent } from './formularios-template.component';

const routes: Routes = [
  {
    path: 'formulariosTemplate',
    component: FormulariosTemplateComponent,
    children: [
      {
        path: 'formulariosTemplate/basicos',
        component: BasicosComponent,
      },
      {
        path: 'formulariosTemplate/dinamicos',
        component: DinamicosComponent,
      },
      {
        path: '**',
        redirectTo: 'basicos',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariosTemplateRoutingModule {}
