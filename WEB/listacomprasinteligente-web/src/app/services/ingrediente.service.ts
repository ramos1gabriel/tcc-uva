import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingrediente } from '../model/ingrediente.model';
import { BACK_END_API } from './listacomprasinteligente.api';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  constructor(private http: HttpClient) {}

  createOrUpdate(ingrediente : Ingrediente) {
    if(ingrediente.id != null && ingrediente.id != ''){
      return this.http.put(`${BACK_END_API}/api/ingrediente`, ingrediente); //UPDATE
    } else {
      ingrediente.id = null;
      return this.http.post(`${BACK_END_API}/api/ingrediente`, ingrediente); //CREATE
    }
  }

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/ingrediente/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/ingrediente/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/ingrediente/${id}`);
  }

  //novo
  findAllCombo() {
    return this.http.get(`${BACK_END_API}/api/ingrediente/`);
  }

  //novo
  findNomeReceitaPorIngrediente(idIng : string) {
    return this.http.get(`${BACK_END_API}/api/ingrediente/recing/${idIng}`);
  }
}
