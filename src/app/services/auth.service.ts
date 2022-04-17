import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserLogin } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  keyStorage = 'duy_phat';
  keyToken = 'access_token';
  constructor(private http: HttpClient) {}

  setStorage(storage: string): void {
    localStorage.setItem(this.keyStorage, storage);
  }

  getStorage() {
    localStorage.getItem(this.keyStorage);
  }

  setToken(token: string) {
    localStorage.setItem(this.keyToken, token);
  }

  getToken() {
    return localStorage.getItem(this.keyToken);
  }

  login(userLogin: UserLogin): Observable<User> {
    return this.http.post<User>(`user/login`, userLogin).pipe(
      map((res) => {
        this.setStorage(JSON.stringify(res));
        this.setToken(res.access_token);
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
