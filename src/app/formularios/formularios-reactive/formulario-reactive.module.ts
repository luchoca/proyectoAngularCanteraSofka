import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosReactiveComponent } from './formularios-reactive.component';

@NgModule({
  declarations: [FormulariosReactiveComponent],
  exports: [FormulariosReactiveComponent],
  imports: [CommonModule],
})
export class FormularioReactiveModule {}
