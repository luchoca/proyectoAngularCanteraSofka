import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LoginComponent, SidebarComponent],
  exports: [LoginComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
