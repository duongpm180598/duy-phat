import { Component, OnInit } from '@angular/core';
import { RequestParam, Toast } from 'src/app/models/common.model';
import { ListProductResponse, Product } from 'src/app/models/product.model';
import { ProductService } from '../../../services/product.service';
import { ACTION } from '../../../constants/common.const';
import { Util } from '../../../utils/util.helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ACTION = ACTION;
  loading = false;
  params: RequestParam = {
    page: 1,
    pageSize: 25,
  };
  listProduct: ListProductResponse = {
    data: [],
    page: 1,
    pageSize: 1,
    total: 1,
    totalPage: 1,
  };
  product!: Product;
  visible = false;
  toast: Toast = {
    color: '',
    message: '',
    visible: true,
  };
  action = ACTION.CREATE;

  constructor(private productService: ProductService, public util: Util) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productService.getProducts(this.params).subscribe(
      (data) => {
        this.listProduct = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  handleAction(action: string, product?: any) {
    this.product = product;
    if (action === ACTION.CREATE) {
      this.product = {};
    }
    this.visible = !this.visible;
    this.action = action;
  }

  onActionChange(event: any) {
    this.visible = event;
  }

  onChangePage(event: number) {
    this.params.page = event;
    this.getProducts();
  }
}
