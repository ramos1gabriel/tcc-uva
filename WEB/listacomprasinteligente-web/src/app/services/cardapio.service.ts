import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cardapio } from './../model/cardapio.model';
import { CardapioSemanal } from './../model/cardapio.semanal.model';
import { BACK_END_API } from './listacomprasinteligente.api';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) {}

  createOrUpdate(cardapio : Cardapio) {
    if(cardapio.id != null && cardapio.id != ''){
      return this.http.put(`${BACK_END_API}/api/cardapio`, cardapio); //UPDATE
    } else {
      cardapio.id = null;
      return this.http.post(`${BACK_END_API}/api/cardapio`, cardapio); //CREATE
    }
  }

  //NOVO
  createOrUpdateAll(listCardapio : Array<CardapioSemanal>) {
    if(listCardapio[0].id != null && listCardapio[0].id != ''){
      return this.http.put(`${BACK_END_API}/api/cardapio`, listCardapio); //UPDATE
    } else {
      for (let i = 0; i < listCardapio.length; i++) {
        listCardapio[i].id = null;
      }
      return this.http.post(`${BACK_END_API}/api/cardapio`, listCardapio); //CREATE
    }
  }

  findAllPesquisa(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/cardapio/pesquisa/${page}/${count}`);
  }

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/cardapio/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/cardapio/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/cardapio/${id}`);
  }

  deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(dia : string, refeicao : string, data : string) {
    return this.http.delete(`${BACK_END_API}/api/cardapio/deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao/${dia}/${refeicao}/${data}`);
  }

  deleteByDataCriacao(data : Date) {
    return this.http.delete(`${BACK_END_API}/api/cardapio/deleteByDataCriacao/${data}`);
  }

  findAllByDataCriacao(data : string) {
    return this.http.get(`${BACK_END_API}/api/cardapio/findAllByDataCriacao/${data}`);
  }

  count(data : string) {
    return this.http.get(`${BACK_END_API}/api/cardapio/count/${data}`);
  }

  recuperaReceitas(id : string) {
    return this.http.get(`${BACK_END_API}/api/cardapio/recuperaReceitas/${id}`);
  }

  generateDocumentReport(id: string): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    
    let requestOptions: any = { 
      headers: headers, 
      responseType: 'blob' 
    };

    
    return this.http.post(`${BACK_END_API}/api/lista/gerar/${id}`, '', requestOptions)
      .pipe(map((response)=> {

        let randomNumber : number = Math.floor(1000000 + Math.random() * 9000000);

        return {
          filename: 'listaCompra_'+randomNumber+id+'.pdf',
          data: new Blob([response], {type: 'application/pdf'})
        };
    }));
  }
}
