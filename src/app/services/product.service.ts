import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  ListProductResponse,
  Product,
  ProductCategory,
  ProductUnit,
} from '../models/product.model';
import { catchError, map } from 'rxjs/operators';
import { MessageResponse, RequestParam } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(params: RequestParam): Observable<ListProductResponse> {
    return this.http.post<ListProductResponse>(`product/filter`, params).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getProductCategory(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`product/category`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getProductUnit(): Observable<ProductUnit[]> {
    return this.http.get<ProductUnit[]>(`product/unit`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  addProduct(params: Product): Observable<Product> {
    return this.http.post<Product>(`product/create`, params).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateProduct(params: Product): Observable<Product> {
    return this.http.put<Product>(`product/update`, params).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  deleteProduct(barcode: string): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`product/delete/${barcode}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
