import { DialogService } from './../../services/dialog.service';
import { ReceitaService } from './../../services/receita.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import swal from 'sweetalert';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {
  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listReceita = [];
  
  constructor(
    private ReceitaService : ReceitaService,
    private router : Router
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page, this.count);
  }

  findAll(page : number, count : number) {
    this.ReceitaService.findAllPesquisa(page, count).subscribe((responseApi : ResponseApi) => {
      this.listReceita = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  edit(id : string) {
    this.router.navigate(['/receita-new', id]);
  }

  delete(id : string) {
    //teste
    alert("IMPLEMENTAR DELETE CASCATA AQUI!!");
  }

  setNextPage(event : any) {
    event.preventDefault();
    if(this.page+1 < this.pages.length) {
      this.page = this.page + 1;
      this.findAll(this.page, this.count);
    }
  }

  setPreviousPage(event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = this.page - 1;
      this.findAll(this.page, this.count);
    }
  }

  setPage(i, event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = i;
      this.findAll(this.page, this.count);
    }
  }

  private showMessage(message : {type : string, text : string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => { //LIMPA MENSAGEM
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type : string) : void {
    this.classCss = {
      'alert' : true
    }
    this.classCss['alert-'+type] = true;
  }

  getFromGroupClass(isInvalid : boolean, isDirty): {} {
    return {
      'form-group' : true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }
}
