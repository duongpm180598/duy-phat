import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastBarComponent } from './toast-bar.component';
import { ToastModule } from '@coreui/angular';

@NgModule({
  declarations: [ToastBarComponent],
  imports: [CommonModule, ToastModule],
  exports: [ToastBarComponent],
})
export class ToastBarModule {}
