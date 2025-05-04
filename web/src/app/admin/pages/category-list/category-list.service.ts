import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface Category {
  id: number;
  name: string;
  image: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAll(page = 1, limit = 5): Observable<Category> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Category>(`${this.baseUrl}/category?pageNumber=${page}&pageSize=${limit}`, { headers });
  }

  getById(id: string): Observable<Category> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Category>(`${this.baseUrl}/category/${id}`, { headers });
  }

  create(data: any): Observable<Category> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Category>(`${this.baseUrl}/category`, data, { headers });
  }

  update(id: string, data: any): Observable<Category> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Category>(`${this.baseUrl}/category/${id}`, data, { headers });
  }

  delete(id: string): Observable<Category> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<Category>(`${this.baseUrl}/category/${id}`, { headers });
  }
}
