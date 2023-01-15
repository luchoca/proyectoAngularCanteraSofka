import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LoginComponent, SidebarComponent],
  exports: [LoginComponent, SidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
