import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { BACK_END_API } from './listacomprasinteligente.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(user : User) {
    return this.http.post(`${BACK_END_API}/api/auth`, user);
  }

  createOrUpdate(user : User) {
    if(user.id != null && user.id != ''){
      return this.http.put(`${BACK_END_API}/api/usuario`, user); //UPDATE
    } else {
      user.id = null;
      return this.http.post(`${BACK_END_API}/api/usuario`, user); //CREATE
    }
  }

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/usuario/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/usuario/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/usuario/${id}`);
  }
}
