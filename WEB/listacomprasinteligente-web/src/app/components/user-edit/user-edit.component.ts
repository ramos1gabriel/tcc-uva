import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../model/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

  user = new User('', '', '', '', '', '1');
  shared : SharedService;
  message: {};
  classCss: {};
  idImagem: string;

  constructor(
      private UserService : UserService,
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
  }

  findById(id : string) {
    this.UserService.findById(id).pipe(
      finalize(() => document.getElementById('img'+this.user.imagem).className = 'margin img-selecionada')
      ).subscribe((responseApi : ResponseApi) => {
      this.user = responseApi.data;
      this.user.senha = '';
      this.idImagem = this.user.imagem;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  register(){
    this.message = {};
    this.user.imagem = this.idImagem;
    this.UserService.createOrUpdate(this.user).subscribe((responseApi : ResponseApi) => {
      this.user = new User('', '', '', '', '', '1');
      let userRet : User = responseApi.data;
      this.showMessage({
        type : 'success',
        text : `Dados atualizados com sucesso`
      });
      this.shared.user = userRet; //atualizar imagens em outros componentes
      this.router.navigate(['/']);
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

  selecionaImagem(id: any) {
    this.idImagem = id;
    if(id == 1) {
      document.getElementById('img1').className = 'margin img-selecionada';
      document.getElementById('img2').className = 'margin';
      document.getElementById('img3').className = 'margin';
    } else if(id == 2) {
      document.getElementById('img1').className = 'margin';
      document.getElementById('img2').className = 'margin img-selecionada';
      document.getElementById('img3').className = 'margin';
    } else if(id == 3) {
      document.getElementById('img1').className = 'margin';
      document.getElementById('img2').className = 'margin';
      document.getElementById('img3').className = 'margin img-selecionada';
    }
  }
}
