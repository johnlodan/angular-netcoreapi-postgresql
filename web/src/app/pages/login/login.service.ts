import { Injectable } from '@angular/core';
import { ILogin } from './models/login.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://localhost:7011/api'

  constructor(private http: HttpClient) { }

  login(user: ILogin): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, user).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }
}
