import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosTemplateRoutingModule } from './formularios-template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BasicosComponent, DinamicosComponent],
  imports: [CommonModule, FormulariosTemplateRoutingModule, RouterModule],
  exports: [BasicosComponent, DinamicosComponent],
})
export class FormulariosTemplateModule {}
