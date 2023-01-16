import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import { Router, RouterModule } from '@angular/router';
import { FormulariosTemplateModule } from './formularios-template/formularios-template.module';

@NgModule({
  declarations: [FormulariosComponent],
  exports: [FormulariosComponent],
  imports: [CommonModule, RouterModule, FormulariosTemplateModule],
})
export class FormulariosModule {}
