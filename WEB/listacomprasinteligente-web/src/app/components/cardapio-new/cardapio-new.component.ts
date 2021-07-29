import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ReceitaService } from './../../services/receita.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CardapioService } from './../../services/cardapio.service';
import { NgForm } from '@angular/forms';
import { Cardapio } from './../../model/cardapio.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cardapio-new',
  templateUrl: './cardapio-new.component.html',
  styleUrls: ['./cardapio-new.component.css']
})
export class CardapioNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm
  data = new Date();

  cardapio = new Cardapio('', null, '', '10', '', '10','', '10', '', '10','', '10', '', '10','', '10', '', '10','', '10', '', '10');
  //cardapio = new Cardapio('', this.data, '', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '');
  dtpipe: DatePipe = new DatePipe('en-US');
  modalRef: BsModalRef;
  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listReceita = [];
  isData : any;

  dataInicial = new Date();
  dataFinal = new Date();

  //globais modais
  posicao : number;
  listLabels = [];
  listControle = [];
  listCampos = ['segundaCafe', 'tercaCafe', 'quartaCafe', 'quintaCafe','sextaCafe', 'segundaAlmoco', 'tercaAlmoco','quartaAlmoco', 'quintaAlmoco', 'sextaAlmoco', 'segundaLanche', 'tercaLanche', 'quartaLanche', 'quintaLanche', 'sextaLanche', 'segundaJantar', 'tercaJantar', 'quartaJantar', 'quintaJantar', 'sextaJantar'];

  //edit
  listReceitaEdit = [];

  constructor(
    private modalService: BsModalService,
    private ReceitaService : ReceitaService,
    private CardapioService : CardapioService,
    private router : Router,
    private route : ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAllReceita(this.page, this.count); //model

    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.spinner.show();
      this.findById(id);
      this.recuperaReceitas(id);
    } else {
      this.findByData(this.data);
    }
  }

  /*calculaSemana() {
    //pega dia da semana
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    let dataAtual = new Date(this.dataFinal).toLocaleTimeString('en-us', options);
    let datas = dataAtual.split(',');
    
    let diaSemana = datas[0];
    //console.log('dia da semana='+diaSemana);

    //em caso de ser final de semana
    if(diaSemana == 'Saturday') {
      this.dataInicial.setDate(this.dataInicial.getDate() + 2);
    } else if(diaSemana == 'Sunday') {
      this.dataInicial.setDate(this.dataInicial.getDate() + 1);
    }

    this.dataFinal.setDate(this.dataInicial.getDate() + 5);

    console.log('data inicial='+this.formataData(this.dataInicial));
  }*/

  //MODAL
  openModal(template: TemplateRef<any>, id : number) {
    this.modalRef = this.modalService.show(template);
    this.posicao = id; 
    //console.log(this.modalRef);
  }

  selecionaReceita(id : string, nome : string, posicao : number) {
    this.listLabels[posicao] = nome; //label
    this.listControle[posicao] = true; //mostra label e disabilita button
    this.form.controls[this.listCampos[posicao]].setValue(id); //seta id receita hidden
    this.modalRef.hide(); //fecha modal
  }

  removeReceita(posicao : number) {
    this.listLabels[posicao] = ''; //label
    this.listControle[posicao] = false; //mostra label e disabilita button
    this.form.controls[this.listCampos[posicao]].setValue(''); //seta id receita hidden
  }

  //PESQUISA RECEITA
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

  setPage(i : number, event : any) {
    event.preventDefault();
    if(i >= 0) {
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

  /*formataData(data : Date, tipo : string) {
    let dataAtual = new Date(data);
    let dia = "";
    let mes = "";
    let dataCompleta;

    if(dataAtual.getDate() < 10) {
      dia = "0" + (dataAtual.getDate()+1);
    } else {
      dia = "" + (dataAtual.getDate()+1);
    }

    if((dataAtual.getMonth()+1) < 10) {
      mes = "0" + (dataAtual.getMonth()+1);
    } else {
      dia = ""+(dataAtual.getMonth()+1);
    }
    
    if(tipo == 'db') {
      dataCompleta = dataAtual.getFullYear() + '-' + mes + '-' + dia;
    } else {
      dataCompleta = dia + '/' + mes + '/' + dataAtual.getFullYear();
    }

    return  dataCompleta;
  }*/

  limparCardapio() {
    for (let i = 0; i < 20; i++) {
      this.listLabels[i] = '';
      this.listControle[i] = false;
      this.form.controls[this.listCampos[i]].setValue('');
    }
  }

  //
  save(){
    this.message = {};
    //this.cardapio.dataCriacao = this.data;//this.formataData(this.data, 'db');
    this.CardapioService.createOrUpdate(this.cardapio).subscribe((responseApi : ResponseApi) => {
      this.cardapio = new Cardapio('', null, '', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '');
      let cardapioRet : Cardapio = responseApi.data;
      this.limparCardapio();
      this.form.resetForm();
      let formattedDate = this.dtpipe.transform(cardapioRet.dataCriacao, 'dd/MM/yyyy');
      this.showMessage({
        type : 'success',
        text : `Cardápio do dia ${formattedDate} cadastrado com sucesso!`
      });
      this.router.navigate(['/cardapio-list']);
      /*let id : string = this.route.snapshot.params['id'];
      if(id != undefined){
        this.router.navigate(['/cardapio-list']);
      }*/
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findByData(datastr : Date) {
    this.CardapioService.findByData(datastr).pipe(
      /*finalize(() => 
        console.log(this.isData)
      )*/
    ).subscribe((responseApi : ResponseApi) => {
      console.log(responseApi.data);
      this.isData = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findById(id : string) {
    this.CardapioService.findById(id).pipe(
      finalize(() => this.data = this.cardapio.dataCriacao)
    ).subscribe((responseApi : ResponseApi) => {
      this.cardapio = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  recuperaReceitas(id : string) {
    this.CardapioService.recuperaReceitas(id).pipe(
      finalize(() => 
        this.preencheCardapioEdit()
      )
    ).subscribe((responseApi : ResponseApi) => {
      this.listReceitaEdit = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  preencheCardapioEdit() {
    for (let i = 0; i < this.listReceitaEdit.length; i++) {
      if(this.listReceitaEdit[i].id != '' && this.listReceitaEdit[i].id != null) {
        this.listLabels[i] = this.listReceitaEdit[i].nome;
        this.listControle[i] = true;
      } else {
        this.listLabels[i] = '';
        this.listControle[i] = false;
      }
    }

    this.spinner.hide();
  }
}
