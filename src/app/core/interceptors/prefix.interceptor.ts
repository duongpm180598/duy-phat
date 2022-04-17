import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.baseUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class PrefixApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: new URL(environment.baseUrl + request.url).href,
    });
    return next.handle(request);
  }
}
