import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ACTION } from 'src/app/constants/common.const';
import {
  Product,
  ProductCategory,
  ProductUnit,
} from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss'],
})
export class ProductPopupComponent implements OnInit {
  @Input() visible = false;
  @Input() action = ACTION.CREATE;
  @Input() set product(product: Product) {
    this.setFormValue(product);
  }
  @Output() onActionChange: EventEmitter<any> = new EventEmitter<any>();
  ACTION = ACTION;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.form = this.formBuilder.group({
      barcode: null,
      name: null,
      importPrice: null,
      exportPrice: null,
      category: null,
      unit: null,
      status: '1',
    });
  }

  units: ProductUnit[] = [];
  categories: ProductCategory[] = [];

  ngOnInit(): void {
    this.getProductUnit();
    this.getProductCategory();
  }

  getProductUnit() {
    this.productService.getProductUnit().subscribe((data) => {
      this.units = data;
    });
  }

  getProductCategory() {
    this.productService.getProductCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  setFormValue(product: Product) {
    if (product?.barcode) {
      this.form.patchValue(product);
    } else {
      this.form.reset();
    }
  }

  submit(action: string) {
    if (this.form.valid) {
      if (action === ACTION.CREATE) {
        this.productService.addProduct(this.form.value).subscribe(
          (data) => {
            this.visible = false;
            this.onActionChange.emit(this.visible);
          },
          (error) => {}
        );
      } else if (action === ACTION.EDIT) {
        this.productService.updateProduct(this.form.value).subscribe(
          (data) => {
            this.visible = false;
            this.onActionChange.emit(this.visible);
          },
          (error) => {}
        );
      }
    }
  }

  handleAction() {
    switch (this.action) {
      case ACTION.CLOSE:
        this.visible = false;
        break;
      case ACTION.CREATE:
        this.submit(ACTION.CREATE);
        break;
      case ACTION.EDIT:
        this.submit(ACTION.EDIT);
        break;
      default:
        break;
    }
    this.onActionChange.emit(this.visible);
  }
}
