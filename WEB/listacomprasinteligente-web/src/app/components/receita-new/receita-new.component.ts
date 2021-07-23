import { ReceitaService } from './../../services/receita.service';
import { SharedService } from './../../services/shared.service';
import { Receita } from './../../model/receita.model';
import { User } from './../../model/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita-new',
  templateUrl: './receita-new.component.html',
  styleUrls: ['./receita-new.component.css']
})
export class ReceitaNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  usuario = new User('', '', '', '', '', '');
  receita = new Receita('', '', '', '', this.usuario);
  shared : SharedService;
  message: {};
  classCss: {};
  modo : string;

  constructor(
    private ReceitaService : ReceitaService,
    private route : ActivatedRoute,
    private router : Router
  ) { 

    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id : string = this.route.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }

    //edit
    this.modo = this.route.snapshot.params['edit'];
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
    this.usuario = new User(this.shared.user.id, '', '', '', '', '');
    this.receita.usuario = this.usuario;
    this.ReceitaService.createOrUpdate(this.receita).subscribe((responseApi : ResponseApi) => {
      //this.usuario = new User(this.shared.user.id, '', '', '', '', '');
      this.receita = new Receita('', '', '', '', this.usuario);
      let receitaRet : Receita = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type : 'success',
        text : `${receitaRet.nome} cadastrado com sucesso!`
      });

      if(this.modo == 'edit') {
        this.router.navigate(['/receitaingrediente-new', receitaRet.id, 'edit']);
      } else {
        this.router.navigate(['/receitaingrediente-new', receitaRet.id]);
      }

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
