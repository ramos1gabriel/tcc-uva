import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cardapio } from './../model/cardapio.model';
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

  findAll(page : number, count : number) {
    return this.http.get(`${BACK_END_API}/api/cardapio/${page}/${count}`);
  }

  findById(id : string) {
    return this.http.get(`${BACK_END_API}/api/cardapio/${id}`);
  }

  delete(id : string) {
    return this.http.delete(`${BACK_END_API}/api/cardapio/${id}`);
  }

  findByData(data : Date) {
    return this.http.get(`${BACK_END_API}/api/cardapio/findAllByDataCriacao/${data}`);
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