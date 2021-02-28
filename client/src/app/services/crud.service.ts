import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Metal } from '../models/metal';

const baseUrl = 'http://localhost:5000/metals';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAllMetals(): Observable<Metal[]> {
    console.log("getAllMetals service started")
    return this.http.get<Metal[]>(baseUrl);
  }

  getMetal(id: number): Observable<Metal> {
    return this.http.get<Metal>(`${baseUrl}/${id}`);
  }

  createMetal(metal: Metal): Observable<Metal> {
    return this.http.post<Metal>(baseUrl, metal);
  }

  update(id: number, metal: Metal): Observable<Metal> {
    return this.http.put<Metal>(`${baseUrl}/${id}`, metal);
  }

  deleteMetal(id: number): Observable<Metal> {
    return this.http.delete<Metal>(`${baseUrl}/${id}`);
  }

}
