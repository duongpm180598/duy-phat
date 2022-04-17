import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging.component';
import { GridModule, PaginationModule } from '@coreui/angular';

@NgModule({
  declarations: [PagingComponent],
  imports: [CommonModule, GridModule, PaginationModule],
  exports: [PagingComponent],
})
export class PagingModule {}
