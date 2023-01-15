import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormulariosComponent],
  exports: [FormulariosComponent],
  imports: [CommonModule],
})
export class FormulariosModule {}
