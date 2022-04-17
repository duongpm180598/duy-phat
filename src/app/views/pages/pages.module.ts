import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  TableModule,
  TooltipModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { NgxLoadingModule } from 'ngx-loading';
import { TicketComponent } from './ticket/ticket.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HistoryComponent } from './history/history.component';
import { BasesModule } from '../bases/bases.module';
import { ProductPopupComponent } from './product/product-popup/product-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDeletePopupComponent } from './product/product-delete-popup/product-delete-popup.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    TicketComponent,
    ProductComponent,
    CategoryComponent,
    HistoryComponent,
    ProductPopupComponent,
    ProductDeletePopupComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    TableModule,
    IconModule,
    FormModule,
    TooltipModule,
    ModalModule,
    BasesModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
  ],
})
export class PagesModule {}
