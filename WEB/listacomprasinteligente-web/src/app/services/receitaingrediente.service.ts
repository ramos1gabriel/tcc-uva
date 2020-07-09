import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReceitaIngrediente } from './../model/receitaingrediente.model';
import { BACK_END_API } from './listacomprasinteligente.api';

@Injectable({
  providedIn: 'root'
})
export class ReceitaIngredienteService {

  constructor(private http: HttpClient) {}

  createOrUpdate(recIng : ReceitaIngrediente) {
    if(recIng.id != null && recIng.id != ''){
      return this.http.put(`${BACK_END_API}/api/recIng`, recIng); //UPDATE
    } else {
      recIng.id = null;
      return this.http.post(`${BACK_END_API}/api/recIng`, recIng); //CREATE
    }
  }

  createOrUpdateAll(listRecIng : Array<ReceitaIngrediente>) {
    if(listRecIng[0].id != null && listRecIng[0].id != ''){ //GANBIARRA?? ALTERNATIVA?
      return this.http.put(`${BACK_END_API}/api/recIng`, listRecIng); //UPDATE
    } else {
      for (let i = 0; i < listRecIng.length; i++) {
        listRecIng[i].id = null;
      }
      return this.http.post(`${BACK_END_API}/api/recIng`, listRecIng); //CREATE
    }
  }

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/recIng/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/recIng/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/recIng/${id}`);
  }
}
