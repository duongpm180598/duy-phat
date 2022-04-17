import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingModule } from '../bases/paging/paging.module';
import { ToastBarModule } from '../bases/toast-bar/toast-bar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagingModule, ToastBarModule],
  exports: [PagingModule, ToastBarModule],
})
export class BasesModule {}
