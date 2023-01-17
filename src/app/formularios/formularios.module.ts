import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import { Router, RouterModule } from '@angular/router';
import { FormulariosTemplateModule } from './formularios-template/formularios-template.module';
import { FormulariosReactiveComponent } from './formularios-reactive/formularios-reactive.component';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormularioReactiveModule } from './formularios-reactive/formulario-reactive.module';

@NgModule({
  declarations: [FormulariosComponent],
  exports: [FormulariosComponent],
  imports: [
    FormulariosRoutingModule,
    CommonModule,
    RouterModule,
    FormulariosTemplateModule,
    FormularioReactiveModule,
  ],
})
export class FormulariosModule {}
