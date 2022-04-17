import { DataResponse } from './common.model';

export interface Product {
  _id?: string;
  barcode?: string;
  name?: string;
  importPrice?: number;
  exportPrice?: number;
  category?: string;
  unit?: string;
  status?: string;
}

export interface ProductUnit {
  _id: string;
  title: string;
}

export interface ProductCategory {
  _id: string;
  name: string;
}

export interface ListProductResponse extends DataResponse<Product> {}
