import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receita } from './../model/receita.model';
import { BACK_END_API } from './listacomprasinteligente.api';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) {}

  createOrUpdate(receita : Receita) {
    if(receita.id != null && receita.id != ''){
      return this.http.put(`${BACK_END_API}/api/receita`, receita); //UPDATE
    } else {
      receita.id = null;
      return this.http.post(`${BACK_END_API}/api/receita`, receita); //CREATE
    }
  }

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/receita/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/receita/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/receita/${id}`);
  }

  findAllPesquisa(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/receita/pesquisa/${page}/${count}`);
  }
}
