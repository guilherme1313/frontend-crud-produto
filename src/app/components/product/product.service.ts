import { environment } from './../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';

import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl =  `${environment.api}/products/`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(product: Product):Observable<Product> {
   return this.http.post<Product>(`${this.baseUrl}`, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  readById(id: string ): Observable<Product>{
    const url = `${this.baseUrl}${id}`;
   return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id: string): Observable<Product>{
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<Product>(url);
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  }

}
