import { ReceitaService } from './../../services/receita.service';
import { SharedService } from './../../services/shared.service';
import { Receita } from './../../model/receita.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';

@Component({
  selector: 'app-receita-new',
  templateUrl: './receita-new.component.html',
  styleUrls: ['./receita-new.component.css']
})
export class ReceitaNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  receita = new Receita('', '', '', '');
  shared : SharedService;
  message: {};
  classCss: {};

  constructor(
    private ReceitaService : ReceitaService,
    private route : ActivatedRoute
  ) { 

    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }
  }

  findById(id : string) {
    this.ReceitaService.findById(id).subscribe((responseApi : ResponseApi) => {
      this.receita = responseApi.data;
      //this.user.senha = '';
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  save(){
    this.message = {};
    this.ReceitaService.createOrUpdate(this.receita).subscribe((responseApi : ResponseApi) => {
      this.receita = new Receita('', '', '', '');
      let receitaRet : Receita = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type : 'success',
        text : `${receitaRet.nome} cadastrado com sucesso!`
      });
      //window.location.href = '/login';
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
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
