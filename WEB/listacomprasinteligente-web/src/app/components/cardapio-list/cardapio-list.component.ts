import { DialogService } from './../../services/dialog.service';
import { CardapioService } from './../../services/cardapio.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import swal from 'sweetalert';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.component.html',
  styleUrls: ['./cardapio-list.component.css']
})
export class CardapioListComponent implements OnInit {

  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  firstPage : number = 0;
  lastPage : number;
  shared : SharedService;
  message : {};
  classCss : {};
  listCardapio = [];
  listProgress = [];
  listCampos = ['segundaCafe', 'tercaCafe', 'quartaCafe', 'quintaCafe','sextaCafe', 
                'segundaAlmoco', 'tercaAlmoco','quartaAlmoco', 'quintaAlmoco', 'sextaAlmoco', 
                'segundaLanche', 'tercaLanche', 'quartaLanche', 'quintaLanche', 'sextaLanche', 
                'segundaJantar', 'tercaJantar', 'quartaJantar', 'quintaJantar', 'sextaJantar'];
  
  constructor(
    private dialogService : DialogService,
    private CardapioService : CardapioService,
    private router : Router,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.spinner.show();
    this.findAllPesquisa(this.page, this.count);
  }

  findAllPesquisa(page : number, count : number) {
    this.CardapioService.findAllPesquisa(page, count).pipe(
      finalize(() => 
        this.preencheProgressBar()
      )
    ).subscribe((responseApi : ResponseApi) => {
      this.listCardapio = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
      this.lastPage = this.pages.length-1;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findAll(page : number, count : number) {
    this.CardapioService.findAll(page, count).pipe(
      finalize(() => 
        this.preencheProgressBar()
      )
    ).subscribe((responseApi : ResponseApi) => {
      this.listCardapio = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
      this.lastPage = this.pages.length-1;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  edit(id : string) {
    this.router.navigate(['/cardapio-new', id]);
  }

  delete(data : Date) {
    swal({
      title: "Atenção",
      text: `Tem certeza que deseja excluir esse registro?`,
      icon: "warning",
      buttons: ['Cancelar', true],
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.message = {};
        this.CardapioService.deleteByDataCriacao(data).subscribe((responseApi : ResponseApi) => {
          swal(`Registro excluido com sucesso!`, {
            icon: "success",
          });
          this.listCardapio = [];
          this.findAllPesquisa(0, this.count);
        }, err => {
          this.showMessage({
            type : 'error',
            text : err['error']['errors'][0]
          });
        });
      }
    });
  }

  setNextPage(event : any) {
    event.preventDefault();
    if(this.page+1 < this.pages.length) {
      this.page = this.page + 1;
      this.findAllPesquisa(this.page, this.count);
    }
  }

  setPreviousPage(event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = this.page - 1;
      this.findAllPesquisa(this.page, this.count);
    }
  }

  setPage(i: number, event : any) {
    event.preventDefault();
    if(i >= 0) {
      this.page = i;
      this.findAllPesquisa(this.page, this.count);
    }
  }

  setFirstPage(event : any) {
    event.preventDefault();
    if(this.listCardapio.length > 0) {
      this.findAllPesquisa(this.firstPage, this.count);
    }
  }

  setLastPage(event : any) {
    event.preventDefault();
    if(this.listCardapio.length > 0) {
      this.findAllPesquisa(this.lastPage, this.count);
    }
  }

  private showMessage(message : {type : string, text : string}) : void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
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

  preencheProgressBar() {
    for (let i = 0; i < this.listCardapio.length; i++) {
      let progress : number = 0;
      for(let j = 0; j < this.listCardapio[i].qtdRefeicoes; j++) {
        progress += 5;
      }
      this.listProgress[i] = progress;
    }
    this.spinner.hide();
  }

  exportListaCompraToPdf(id : string) {
    this.router.navigate(['/listacompra-detail', id]);
  }
}
