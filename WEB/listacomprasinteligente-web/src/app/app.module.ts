import { DialogService } from './services/dialog.service';
import { AuthGuard } from './components/security/auth.guard';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { routes } from './app.routes';
import { SharedService } from './services/shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { IngredienteNewComponent } from './components/ingrediente-new/ingrediente-new.component';
import { IngredienteListComponent } from './components/ingrediente-list/ingrediente-list.component';
import { ReceitaNewComponent } from './components/receita-new/receita-new.component';
import { ReceitaingredienteNewComponent } from './components/receitaingrediente-new/receitaingrediente-new.component';
import { ModopreparoNewComponent } from './components/modopreparo-new/modopreparo-new.component';
import { ReceitaListComponent } from './components/receita-list/receita-list.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CardapioNewComponent } from './components/cardapio-new/cardapio-new.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CardapioListComponent } from './components/cardapio-list/cardapio-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ListacompraDetailComponent } from './components/listacompra-detail/listacompra-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent,
    UserListComponent,
    IngredienteNewComponent,
    IngredienteListComponent,
    ReceitaNewComponent,
    ReceitaingredienteNewComponent,
    ModopreparoNewComponent,
    ReceitaListComponent,
    CardapioNewComponent,
    CardapioListComponent,
    UserEditComponent,
    ListacompraDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routes,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot()
  ],
  providers: [
    UserService, 
    SharedService,
    DialogService,
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
