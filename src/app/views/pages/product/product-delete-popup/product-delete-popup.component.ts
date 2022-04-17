import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete-popup',
  templateUrl: './product-delete-popup.component.html',
  styleUrls: ['./product-delete-popup.component.scss'],
})
export class ProductDeletePopupComponent implements OnInit {
  @Input() visible = false;
  @Input() barcode!: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  handleAction(isDelete: boolean) {
    if (isDelete) {
      this.deleteProduct();
    } else {
      this.visible = false;
    }
  }

  deleteProduct() {
    if (this.barcode) {
      this.productService.deleteProduct(this.barcode).subscribe(
        (data) => {
          this.visible = false;
        },
        (error) => {}
      );
    }
  }
}
