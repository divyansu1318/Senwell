import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://6622b1103e17a3ac846db82b.mockapi.io/';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get<User[]>(this.url + url);
  }

}
