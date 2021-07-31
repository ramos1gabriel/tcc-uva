import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaCompra } from '../model/listacompra.model';
import { BACK_END_API } from './listacomprasinteligente.api';

@Injectable({
  providedIn: 'root'
})
export class ListacompraService {

  constructor(private http: HttpClient) {}

  gerarLista(id : string) {
    return this.http.get(`${BACK_END_API}/api/lista/gerarLista/${id}`);
  }
}
