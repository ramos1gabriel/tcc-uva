import { Ingrediente } from './../../model/ingrediente.model';
import { Receita } from './../../model/receita.model';
import { ReceitaIngredienteService } from './../../services/receitaingrediente.service';
import { SharedService } from './../../services/shared.service';
import { ReceitaIngrediente } from './../../model/receitaingrediente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { IngredienteService } from './../../services/ingrediente.service';
import { ReceitaService } from './../../services/receita.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { User } from './../../model/user.model';

//https://bearnithi.com/2019/05/25/add-remove-multiple-input-fields-dynamically-template-driven-angular/

@Component({
  selector: 'app-receitaingrediente-new',
  templateUrl: './receitaingrediente-new.component.html',
  styleUrls: ['./receitaingrediente-new.component.css']
})
export class ReceitaingredienteNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  //novo
  usuario = new User('', '', '', '', '', '');
  receita = new Receita('', '', '', '', this.usuario);
  ingrediente = new Ingrediente('', '');
  //recing = new ReceitaIngrediente('', '', 0, '', this.receita, this.ingrediente);

  shared : SharedService;
  message: {};
  classCss: {};
  idReceita : string; //receita
  listIngrediente = [];
  modo : string;

  //ARRAY DA TELA
  public ingredientes: any[] = [{
    index: 1,
    id : '',
    ingrediente : '',
    quantidade: 1,
    unidadeMedida: ''
  }];
  
  arrayReceitaIngredientes: Array<ReceitaIngrediente> = [];

  constructor(
    private ReceitaIngredienteService : ReceitaIngredienteService,
    private IngredienteService : IngredienteService,
    private ReceitaService : ReceitaService,
    private route : ActivatedRoute,
    private router : Router
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    //popular combo ingredientes
    this.findAllComboIngredientes();

    //PASSAGEM DE PARAMETRO DA TELA RECEITA
    let idReceita : string = this.route.snapshot.params['idReceita'];
    if(idReceita != undefined){
      this.idReceita = idReceita;
      this.findByIdReceita(this.idReceita);
      //console.log('ID RECEITA = '+this.idReceita);
    }

    let modo : string = this.route.snapshot.params['edit'];
    if(modo == 'edit') {
      this.modo = modo;
      this.findByReceitaId(idReceita);

      /*setTimeout(() => {
        console.log(this.arrayReceitaIngredientes.length);
      }, 1000);*/
    }
  }

  findByReceitaId(id : string) {
    this.ReceitaIngredienteService.findByReceitaId(id).pipe(
      finalize(() => {
        for (var i = 0; this.arrayReceitaIngredientes.length > i; i++) {
          this.ingredientes.push({
            index: i + 1,
            id : this.arrayReceitaIngredientes[i].id,
            ingrediente : this.arrayReceitaIngredientes[i].ingrediente.id,
            quantidade: this.arrayReceitaIngredientes[i].quantidade,
            unidadeMedida: (this.arrayReceitaIngredientes[i].unidadeMedida == 'UNI' ? '' : this.arrayReceitaIngredientes[i].unidadeMedida)
          });
        }
        this.ingredientes.splice(0, 1);
      })
    ).subscribe((responseApi : ResponseApi) => {
      this.arrayReceitaIngredientes = responseApi.datas;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  //POPULA COMBO INGREDIENTES
  findAllComboIngredientes() {
    this.IngredienteService.findAllCombo().subscribe((responseApi : ResponseApi) => {
      this.listIngrediente = responseApi['data'];
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findByIdReceita(id : string) {
    this.ReceitaService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.receita = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findByIdIngrediente(id : string) {
    this.IngredienteService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.ingrediente = responseApi.data;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  //ADD ITEM ARRAY
  addIngrediente() {
    let tamanhoIng = this.ingredientes.length + 1;
    if(tamanhoIng <= 10){
      this.ingredientes.push({
        index: tamanhoIng + 1,
        id : '',
        ingrediente : '',
        quantidade: 1,
        unidadeMedida: ''
      });
    } else { //validacao
      this.showMessage({
        type : 'error',
        text : 'A Receita pode possuir até no máximo 10 ingredientes!'
      });
    }
  }

  //REMOVE ITEM ARRAY
  removeIngrediente(i: number) {
    let tamanhoIng = this.ingredientes.length;
    if(tamanhoIng > 1){
      if(this.modo == 'edit') {
        let id : string = this.ingredientes[i].id;
        //console.log(this.ingredientes[i]);
        if(id != '' && id != 'undefined') {
          this.delete(id);
        }
        this.ingredientes.splice(i, 1);
      } else {
        this.ingredientes.splice(i, 1);
      }

    } else { //validacao
      this.showMessage({
        type : 'error',
        text : 'A Receita deve possuir ao menos 1 ingrediente!'
      });
    }
  }

  private showMessage(message : {type : string, text : string}) : void {
    console.log('type='+message.type+' text='+message.text);
    if(message != undefined) {
      this.message = message;
      this.buildClasses(message.type);
      setTimeout(() => { //LIMPA MENSAGEM
        this.message = undefined;
      }, 3000);
    }
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

  //VALIDACOES
  /*validaQuantidade() {
    let count = 0;
    let error = false;
    for (var i = 0; this.ingredientes.length > i; i++) {
      if(this.ingredientes[i].quantidade <= 0){
        error = true;
        count = i+1;
        break;
      }
    }
    
    if(error){
      this.showMessage({
        type : 'error',
        text : `Quantidade deve ser maior do que ZERO no ${count}º ingrediente`
      });
    }

    return error;
  }*/

  validaQtde(valor : any, posicao : number) {
    if(valor <= 0) {
      this.ingredientes[posicao].quantidade = 1;
      this.showMessage({
        type : 'error',
        text : `Quantidade deve ser maior do que ZERO`
      });
    } else if(valor > 10000) { //REVISAR ISSO DPS!!
      this.ingredientes[posicao].quantidade = 10000;
      this.showMessage({
        type : 'error',
        text : `Quantidade máxima permitida é 10.000!`
      });
    }
  }

  validaDuplicidade(valor : string, posicao : number) {
    let error = false;
    for (let i = 0; i < this.ingredientes.length; i++) {
      if(i == posicao) {
        //para evitar q o proprio item se apague
      } else {
        if(this.ingredientes[i].ingrediente == valor) {
          error = true;
        }
      }
    }

    if(error) {
      this.showMessage({
        type : 'error',
        text : `Esse ingrediente já foi escolhido!`
      });
      this.removeIngrediente(posicao);
    }
  }

  //COMPLEXIDADE ALTA
  persistirArray() {
    this.arrayReceitaIngredientes = []; //limpa array
    
    //if(!this.validaQuantidade()){ //validacao

      for (var i = 0; this.ingredientes.length > i; i++) {
        //seta valores
        let id : string = this.ingredientes[i].id;
        let ingrediente : string = this.ingredientes[i].ingrediente;
        let qtde : any = this.ingredientes[i].quantidade;
        let unidade : string = this.ingredientes[i].unidadeMedida == '' ? 'UNI' : this.ingredientes[i].unidadeMedida;
        
        //seta externos
        //let rec = new Receita(this.idReceita, '', '', '');
        let ing = new Ingrediente(ingrediente, '');
        let recingNovo = new ReceitaIngrediente(id, '', qtde, unidade, this.receita, ing);

        //add array
        this.arrayReceitaIngredientes.push(recingNovo);
      }

      //persiste array
      //console.log(this.arrayReceitaIngredientes);
      this.save(this.arrayReceitaIngredientes);
    //}
  }

  save(listRecIng : Array<ReceitaIngrediente>){
    //console.log(JSON.stringify(listRecIng));
    //this.ReceitaIngredienteService.createOrUpdateAll(listRecIng)
    this.message = null; //tratar bug mensagem vermelha vazia
    this.ReceitaIngredienteService.createOrUpdateAll(listRecIng).subscribe((responseApi : ResponseApi) => {
      let listRecIngRet : Array<ReceitaIngrediente> = responseApi.datas;
      //this.form.resetForm();
      /*this.showMessage({
        type : 'success',
        text : `Total de ${listRecIngRet.length} ingredientes cadastrados com sucesso!`
      });*/
      this.limparTela();
      if(this.modo == 'edit') {
        this.router.navigate(['/modopreparo-new', this.idReceita, 'edit']);
      } else {
        this.router.navigate(['/modopreparo-new', this.idReceita]);
      }
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  limparTela() {
    //limpa array gravacao
    this.arrayReceitaIngredientes = [];

    //limpa array itens na tela
    this.ingredientes = [];

    //add um novo item default
    this.addIngrediente();
  }

  delete(id : string) {
    this.message = {};
    this.ReceitaIngredienteService.delete(id).subscribe((responseApi : ResponseApi) => {
      //??
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }
}