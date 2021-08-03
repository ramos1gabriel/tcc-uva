import { ListacompraService } from './../../services/listacompra.service';
import { DialogService } from './../../services/dialog.service';
import { CardapioService } from './../../services/cardapio.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseApi } from 'src/app/model/response-api';
import swal from 'sweetalert';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-listacompra-detail',
  templateUrl: './listacompra-detail.component.html',
  styleUrls: ['./listacompra-detail.component.css']
})
export class ListacompraDetailComponent implements OnInit {

  //LISTA DRAG & DROP = https://www.thirdrocktechkno.com/blog/building-interactive-lists-with-the-new-angular-7-drag-and-drop-tool/

  shared : SharedService;
  message : {};
  classCss : {};
  listCompras = [];
  dataCriacao : Date;

  constructor(
    private ListacompraService : ListacompraService,
    private route : ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.spinner.show();
    let idCardapio : string = this.route.snapshot.params['idCardapio'];
    if(idCardapio != undefined){
      this.gerarLista(idCardapio);
    }
  }
  gerarLista(id : string) {
    this.ListacompraService.gerarLista(id).pipe(
      finalize(() => this.spinner.hide())
    ).subscribe((responseApi : ResponseApi) => {
      this.listCompras = responseApi.datas;
    }, err => {
      this.showMessage({
        type : 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  //TESTE DRAG & DROP 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listCompras, event.previousIndex, event.currentIndex);
  }

  //DEFAULT
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

  getFromGroupClass(isInvalid : boolean, isDirty: any): {} {
    return {
      'form-group' : true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }

  riscaItem(evento : any, i : any) {
    if(evento) {
      document.getElementById('item'+i).className = 'strike';
    } else {
      document.getElementById('item'+i).className = 'normal';
    }
  }
}
