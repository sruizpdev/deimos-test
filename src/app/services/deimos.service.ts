import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeimosService {

  URI = 'https://jsonplaceholder.typicode.com/users';
  apiKey = '7623fcf6c90f00b8b38b0d9a0825846b';

  constructor(private http: HttpClient) {
    this.URI = `${this.URI}`;
  }
  getDeimosData(){
    return this.http.get(`${this.URI}`);
  }
}