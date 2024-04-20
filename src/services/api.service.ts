import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://62d0e2c31cc14f8c088fd107.mockapi.io/';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get<User[]>(this.url + url);
  }

}
