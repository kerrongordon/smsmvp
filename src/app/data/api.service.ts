import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getStudents() {
      return this.http.get('https://randomuser.me/api/?results=50');
  }
}
