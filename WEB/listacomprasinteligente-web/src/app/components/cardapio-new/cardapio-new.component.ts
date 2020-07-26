import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ReceitaService } from './../../services/receita.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import swal from 'sweetalert';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CardapioService } from './../../services/cardapio.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cardapio-new',
  templateUrl: './cardapio-new.component.html',
  styleUrls: ['./cardapio-new.component.css']
})
export class CardapioNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  modalRef: BsModalRef;
  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listReceita = [];
  posicao : number;

  constructor(
    private modalService: BsModalService,
    private ReceitaService : ReceitaService,
    private CardapioService : CardapioService,
    private router : Router
    ) {
      this.shared = SharedService.getInstance();
    }

  ngOnInit() {
    this.findAllReceita(this.page, this.count);
  }

  openModal(template: TemplateRef<any>, id : number) {
    this.modalRef = this.modalService.show(template);
    this.posicao = id; 
    console.log(this.modalRef);
  }

  //MODAL
  findAllReceita(page : number, count : number) {
    this.ReceitaService.findAllPesquisa(page, count).pipe(
      //finalize(() => this.spinner.hide())
    ).subscribe((responseApi : ResponseApi) => {
      this.listReceita = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  setNextPage(event : any) {
    event.preventDefault();
    if(this.page+1 < this.pages.length) {
      this.page = this.page + 1;
      this.findAllReceita(this.page, this.count);
    }
  }

  setPreviousPage(event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = this.page - 1;
      this.findAllReceita(this.page, this.count);
    }
  }

  setPage(i, event : any) {
    event.preventDefault();
    if(this.page > 0) {
      this.page = i;
      this.findAllReceita(this.page, this.count);
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
