import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';
import { ProductDefinition } from './product-definition';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServer = "https://ds-ecom.azurewebsites.net/";
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getDetailsByName(name): Observable<ProductDefinition[]> {
    return this.httpClient.get<ProductDefinition[]>(this.apiServer + '/products/' + name)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
