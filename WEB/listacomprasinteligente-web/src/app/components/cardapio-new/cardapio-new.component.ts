import { CardapioSemanalDTO } from './../../model/cardapio.semanal.dto.model';
import { CardapioSemanal } from './../../model/cardapio.semanal.model';
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
import { Receita } from 'src/app/model/receita.model';
import { User } from 'src/app/model/user.model';
import * as moment from 'moment'


@Component({
  selector: 'app-cardapio-new',
  templateUrl: './cardapio-new.component.html',
  styleUrls: ['./cardapio-new.component.css']
})
export class CardapioNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm
  data = new Date();

  //cardapio = new Cardapio('', null, '', '10', '', '10','', '10', '', '10','', '10', '', '10','', '10', '', '10','', '10', '', '10');
  cardapio = new Cardapio('', null, '', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '');
  dtpipe: DatePipe = new DatePipe('en-US');
  modalRef: BsModalRef;
  page : number = 0;
  count : number = 5;
  pages : Array<number>;
  firstPage : number = 0;
  lastPage : number;
  shared : SharedService;
  message : {};
  classCss : {};
  listReceita = [];
  isData : any;

  dataInicial = new Date();
  dataFinal = new Date();

  //NOVO
  arrayCardapioSemanal: Array<CardapioSemanal> = [];

  usuario = new User('', '', '', '', '', '');
  receitaVazia = new Receita('', '', '', '', this.usuario);
  cardapiosDTO = new CardapioSemanalDTO(this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                        this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                        this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                        this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                        this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia);
  //globais modais
  posicao : number;
  listLabels = [];
  listControle = [];
  listCampos = ['segundaCafe', 'tercaCafe', 'quartaCafe', 'quintaCafe','sextaCafe', 
                'segundaAlmoco', 'tercaAlmoco','quartaAlmoco', 'quintaAlmoco', 'sextaAlmoco', 
                'segundaLanche', 'tercaLanche', 'quartaLanche', 'quintaLanche', 'sextaLanche', 
                'segundaJantar', 'tercaJantar', 'quartaJantar', 'quintaJantar', 'sextaJantar'];

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
    console.log('data sistema='+this.dtpipe.transform(this.data, 'yyyy-MM-dd'));
    
    this.findAllReceita(this.page, this.count); //model

    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.spinner.show();
      this.findAllByDataCriacao(id);
      
      this.data = new Date(moment(id).toDate());
      console.log('data update='+this.dtpipe.transform(this.data, 'yyyy-MM-dd'));
    } else {
      let formattedDate = this.dtpipe.transform(this.data, 'yyyy-MM-dd');
      this.countDataCriacao(formattedDate);
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

  //INICIO MODAL
  openModal(template: TemplateRef<any>, id : number) {
    this.modalRef = this.modalService.show(template);
    this.posicao = id; 
    //console.log(this.modalRef);
  }

  selecionaReceita(receita : Receita, posicao : string) {
    this.setarCardapioDTO(receita, posicao);
    this.modalRef.hide(); //fecha modal
  }

  removeReceita(posicao : string) {
    this.setarCardapioDTO(this.receitaVazia, posicao); //deleta do DTO

    //deleta do array
    for (var i = 0; this.arrayCardapioSemanal.length > i; i++) {
      let dr = this.arrayCardapioSemanal[i].diaSemana + '-' + this.arrayCardapioSemanal[i].tipoRefeicao;
        if(posicao == dr) {
          this.arrayCardapioSemanal.splice(i, 1);
        }
    }

    //deleta do banco
    let id : string = this.route.snapshot.params['id'];
    if(id != '' && id != 'undefined') {
      var diaRef = posicao.split('-');
      let formattedDate = this.dtpipe.transform(this.data, 'yyyy-MM-dd');
      console.log('remove registro: dia='+diaRef[0]+'&refeicao='+diaRef[1]+'&data='+formattedDate);
      this.deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(diaRef[0], diaRef[1], formattedDate);
    }
  }

  deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(dia : string, refeicao : string, data : string) {
    this.message = {};
    this.CardapioService.deleteByDiaSemanaAndTipoRefeicaoAndDataCriacao(dia, refeicao, data)
    .subscribe((responseApi : ResponseApi) => {
      //
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }
  
  //PESQUISA RECEITAS
  findAllReceita(page : number, count : number) {
    this.ReceitaService.findAllPesquisa(page, count).pipe(
      //finalize(() => this.spinner.hide())
    ).subscribe((responseApi : ResponseApi) => {
      this.listReceita = responseApi['data']['content'];
      this.pages = new Array(responseApi['data']['totalPages']);
      this.lastPage = this.pages.length-1;
    }, err => {
      /*this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });*/
      console.log('Modal receitas: '+err['error']['errors'][0]);
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

  setFirstPage(event : any) {
    event.preventDefault();
    if(this.listReceita.length > 0) {
      this.findAllReceita(this.firstPage, this.count);
    }
  }

  setLastPage(event : any) {
    event.preventDefault();
    if(this.listReceita.length > 0) {
      this.findAllReceita(this.lastPage, this.count);
    }
  }
  //FIM MODAL

  //INICIO DEFAULT
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
  //FIM DEFAULT

  limparCardapio() {
    this.arrayCardapioSemanal = []; //limpa array
    this.cardapiosDTO = new CardapioSemanalDTO(this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                              this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                              this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                              this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia, 
                                              this.receitaVazia, this.receitaVazia, this.receitaVazia, this.receitaVazia);
  }

  //CRUD
  insertDtoToArray(diaRefeicao : string, rec: Receita) {
    var diaRef = diaRefeicao.split('-');
    let id : string = this.route.snapshot.params['id'];
    //console.log(diaRef);
    //console.log('id='+id);
    if(id != undefined) {
      //console.log('entrou update!');
      let novoRegistro : boolean = true;
      for (var i = 0; this.arrayCardapioSemanal.length > i; i++) {
        let dr = this.arrayCardapioSemanal[i].diaSemana + '-' + this.arrayCardapioSemanal[i].tipoRefeicao;
        if(diaRefeicao == dr) {
          this.arrayCardapioSemanal[i].receita = rec;
          novoRegistro = false;
        }
      }
      if(novoRegistro) {
        this.arrayCardapioSemanal.push(new CardapioSemanal('', this.data, diaRef[1], diaRef[0], rec));
      }
    } else {
      //console.log('entrou new!');
      this.arrayCardapioSemanal.push(new CardapioSemanal('', null, diaRef[1], diaRef[0], rec));
    }
  }


  persistirArray() {

    //let tipoRefeicao = ['cafe', 'almoco', 'lanche', 'jantar'];
    //let diaSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

    //cafe
    if(this.cardapiosDTO.segundaCafe.id != '') {
      this.insertDtoToArray('segunda-cafe', this.cardapiosDTO.segundaCafe);
    }
    if(this.cardapiosDTO.tercaCafe.id != '') {
      this.insertDtoToArray('terca-cafe', this.cardapiosDTO.tercaCafe);
    }
    if(this.cardapiosDTO.quartaCafe.id != '') {
      this.insertDtoToArray('quarta-cafe', this.cardapiosDTO.quartaCafe);
    }
    if(this.cardapiosDTO.quintaCafe.id != '') {
      this.insertDtoToArray('quinta-cafe', this.cardapiosDTO.quintaCafe);
    }
    
    if(this.cardapiosDTO.sextaCafe.id != '') {
      this.insertDtoToArray('sexta-cafe', this.cardapiosDTO.sextaCafe);
    }

    //almoco
    if(this.cardapiosDTO.segundaAlmoco.id != '') {
      this.insertDtoToArray('segunda-almoco', this.cardapiosDTO.segundaAlmoco);
    }
    if(this.cardapiosDTO.tercaAlmoco.id != '') {
      this.insertDtoToArray('terca-almoco', this.cardapiosDTO.tercaAlmoco);
    }
    if(this.cardapiosDTO.quartaAlmoco.id != '') {
      this.insertDtoToArray('quarta-almoco', this.cardapiosDTO.quartaAlmoco);
    }
    if(this.cardapiosDTO.quintaAlmoco.id != '') {
      this.insertDtoToArray('quinta-almoco', this.cardapiosDTO.quintaAlmoco);
    }
    if(this.cardapiosDTO.sextaAlmoco.id != '') {
      this.insertDtoToArray('sexta-almoco', this.cardapiosDTO.sextaAlmoco);
    }

    //lanche
    if(this.cardapiosDTO.segundaLanche.id != '') {
      this.insertDtoToArray('segunda-lanche', this.cardapiosDTO.segundaLanche);
    }
    if(this.cardapiosDTO.tercaLanche.id != '') {
      this.insertDtoToArray('terca-lanche', this.cardapiosDTO.tercaLanche);
    }
    if(this.cardapiosDTO.quartaLanche.id != '') {
      this.insertDtoToArray('quarta-lanche', this.cardapiosDTO.quartaLanche);
    }
    if(this.cardapiosDTO.quintaLanche.id != '') {
      this.insertDtoToArray('quinta-lanche', this.cardapiosDTO.quintaLanche);
    }
    if(this.cardapiosDTO.sextaLanche.id != '') {
      this.insertDtoToArray('sexta-lanche', this.cardapiosDTO.sextaLanche);
    }

    //jantar
    if(this.cardapiosDTO.segundaJantar.id != '') {
      this.insertDtoToArray('segunda-jantar', this.cardapiosDTO.segundaJantar);
    }
    if(this.cardapiosDTO.tercaJantar.id != '') {
      this.insertDtoToArray('terca-jantar', this.cardapiosDTO.tercaJantar);
    }
    if(this.cardapiosDTO.quartaJantar.id != '') {
      this.insertDtoToArray('quarta-jantar', this.cardapiosDTO.quartaJantar);
    }
    if(this.cardapiosDTO.quintaJantar.id != '') {
      this.insertDtoToArray('quinta-jantar', this.cardapiosDTO.quintaJantar);
    }
    if(this.cardapiosDTO.sextaJantar.id != '') {
      this.insertDtoToArray('sexta-jantar', this.cardapiosDTO.sextaJantar);
    }

    //console.log(this.arrayCardapioSemanal);

    //persiste array
    this.save(this.arrayCardapioSemanal);
  }

  save(listCardapioSemanal : Array<CardapioSemanal>){
    console.log(this.arrayCardapioSemanal);
    this.message = null; //tratar bug mensagem vermelha vazia
    this.CardapioService.createOrUpdateAll(listCardapioSemanal).subscribe((responseApi : ResponseApi) => {
      let listCardapioSemanalRet : Array<CardapioSemanal> = responseApi.datas;
      this.limparCardapio();
      this.form.resetForm();
      let formattedDate = this.dtpipe.transform(this.data, 'dd/MM/yyyy');
      this.showMessage({
        type : 'success',
        text : `Cardápio do dia ${formattedDate} cadastrado com sucesso!`
      });
      this.arrayCardapioSemanal = []; //limpa array
      this.router.navigate(['/cardapio-list']);
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findAllByDataCriacao(datastr : string) {
    this.CardapioService.findAllByDataCriacao(datastr).pipe(
      finalize(() => {
        for (var i = 0; this.arrayCardapioSemanal.length > i; i++) {
          let receita = this.arrayCardapioSemanal[i].receita;
          let diaRefeicao = this.arrayCardapioSemanal[i].diaSemana + '-' + this.arrayCardapioSemanal[i].tipoRefeicao;
          this.setarCardapioDTO(receita, diaRefeicao);
        }
      })
    ).subscribe((responseApi : ResponseApi) => {
      this.arrayCardapioSemanal = responseApi.datas;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
    this.spinner.hide();
  }

  countDataCriacao(datastr : string) {
    this.CardapioService.count(datastr).pipe(
      /*finalize(() => {
      })*/
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

  //legado
  findById(id : string) {
    this.CardapioService.findById(id)/*.pipe(
      finalize(() => this.data = this.cardapio.dataCriacao)
    )*/.subscribe((responseApi : ResponseApi) => {
      this.cardapio = responseApi.data;
      this.data = this.cardapio.dataCriacao;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  //legado
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

  //legado
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
  
  //GAMBIARRA
  setarCardapioDTO(receita : Receita, posicao : string) {
    var diaRefeicao = posicao.split('-');
    //console.log(this.cardapiosDTO);

    //CAFE
    if(diaRefeicao[1] == 'cafe') {
      switch(diaRefeicao[0]) {
        case 'segunda': {
          this.cardapiosDTO.segundaCafe = receita;
          break; 
        }
        case 'terca': {
          this.cardapiosDTO.tercaCafe = receita;
          break; 
        }
        case 'quarta': {
          this.cardapiosDTO.quartaCafe = receita;
          break; 
        }
        case 'quinta': {
          this.cardapiosDTO.quintaCafe = receita;
          break; 
        }
        case 'sexta': {
          this.cardapiosDTO.sextaCafe = receita;
          break; 
        }
      }
    }

    //ALMOCO
    if(diaRefeicao[1] == 'almoco') {
      switch(diaRefeicao[0]) {
        case 'segunda': {
          this.cardapiosDTO.segundaAlmoco = receita;
          break; 
        }
        case 'terca': {
          this.cardapiosDTO.tercaAlmoco = receita;
          break; 
        }
        case 'quarta': {
          this.cardapiosDTO.quartaAlmoco = receita;
          break; 
        }
        case 'quinta': {
          this.cardapiosDTO.quintaAlmoco = receita;
          break; 
        }
        case 'sexta': {
          this.cardapiosDTO.sextaAlmoco = receita;
          break; 
        }
      }
    }

    //LANCHE
    if(diaRefeicao[1] == 'lanche') {
      switch(diaRefeicao[0]) {
        case 'segunda': {
          this.cardapiosDTO.segundaLanche = receita;
          break; 
        }
        case 'terca': {
          this.cardapiosDTO.tercaLanche = receita;
          break; 
        }
        case 'quarta': {
          this.cardapiosDTO.quartaLanche = receita;
          break; 
        }
        case 'quinta': {
          this.cardapiosDTO.quintaLanche = receita;
          break; 
        }
        case 'sexta': {
          this.cardapiosDTO.sextaLanche = receita;
          break; 
        }
      }
    }

    //JANTAR
    if(diaRefeicao[1] == 'jantar') {
      switch(diaRefeicao[0]) {
        case 'segunda': {
          this.cardapiosDTO.segundaJantar = receita;
          break; 
        }
        case 'terca': {
          this.cardapiosDTO.tercaJantar = receita;
          break; 
        }
        case 'quarta': {
          this.cardapiosDTO.quartaJantar = receita;
          break; 
        }
        case 'quinta': {
          this.cardapiosDTO.quintaJantar = receita;
          break; 
        }
        case 'sexta': {
          this.cardapiosDTO.sextaJantar = receita;
          break; 
        }
      }
    }
  }
}
