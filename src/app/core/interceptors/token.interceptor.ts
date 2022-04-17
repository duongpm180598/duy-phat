import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenApiInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (environment.production) {
      return next.handle(request);
    }
    const token = this.auth.getToken();
    request = request.clone({
      headers: new HttpHeaders({
        Authorization: Boolean(token) === true ? `Bearer ${token}` : '',
      }),
    });
    return next.handle(request);
  }
}
