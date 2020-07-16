import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModoPreparo } from './../model/modopreparo.model';
import { BACK_END_API } from './listacomprasinteligente.api';

@Injectable({
  providedIn: 'root'
})
export class ModopreparoService {

  constructor(private http: HttpClient) {}

  createOrUpdate(modopreparo : ModoPreparo) {
    if(modopreparo.id != null && modopreparo.id != ''){
      return this.http.put(`${BACK_END_API}/api/modopreparo`, modopreparo); //UPDATE
    } else {
      modopreparo.id = null;
      return this.http.post(`${BACK_END_API}/api/modopreparo`, modopreparo); //CREATE
    }
  }

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/modopreparo/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/modopreparo/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/modopreparo/${id}`);
  }
}
