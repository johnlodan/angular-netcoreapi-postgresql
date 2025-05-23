import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

interface Category {
  id: number;
  name: string;
  image: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllPublic(page = 1, limit = 5): Observable<Category> {
    const token = localStorage.getItem('authToken');
    return this.http.get<Category>(`${this.baseUrl}/category/public?pageNumber=${page}&pageSize=${limit}`);
  }
}
