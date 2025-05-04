import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUser } from './models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'https://localhost:7011/api'

  constructor(private http: HttpClient) { }

  register(user: IRegisterUser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user)
  }
}
