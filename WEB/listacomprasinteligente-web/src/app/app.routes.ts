import { SummaryComponent } from './components/summary/summary.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { IngredienteNewComponent } from './components/ingrediente-new/ingrediente-new.component';
import { IngredienteListComponent } from './components/ingrediente-list/ingrediente-list.component';
import { ReceitaNewComponent } from './components/receita-new/receita-new.component';
import { ReceitaingredienteNewComponent } from './components/receitaingrediente-new/receitaingrediente-new.component';
import { ModopreparoNewComponent } from './components/modopreparo-new/modopreparo-new.component';
import { ReceitaListComponent } from './components/receita-list/receita-list.component';
import { CardapioNewComponent } from './components/cardapio-new/cardapio-new.component';
import { CardapioListComponent } from './components/cardapio-list/cardapio-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

export const ROUTES : Routes = [
    { path : '', component : HomeComponent, canActivate : [AuthGuard]},
    { path : 'login', component : LoginComponent },
    { path : 'user-new', component : UserNewComponent },
    { path : 'user-new/:id', component : UserNewComponent, canActivate : [AuthGuard] },
    { path : 'user-list', component : UserListComponent, canActivate : [AuthGuard] },
    { path : 'ticket-list', component : TicketListComponent, canActivate : [AuthGuard] },
    { path : 'ticket-new', component : TicketNewComponent, canActivate : [AuthGuard] },
    { path : 'ticket-new/:id', component : TicketNewComponent, canActivate : [AuthGuard] },
    { path : 'ticket-detail/:id', component : TicketDetailComponent, canActivate : [AuthGuard] },
    { path : 'summary', component : SummaryComponent, canActivate : [AuthGuard] },
    { path : 'ingrediente-new', component : IngredienteNewComponent, canActivate : [AuthGuard] },
    { path : 'ingrediente-new/:id', component : IngredienteNewComponent, canActivate : [AuthGuard] },
    { path : 'ingrediente-list', component : IngredienteListComponent, canActivate : [AuthGuard] },
    { path : 'receita-new', component : ReceitaNewComponent, canActivate : [AuthGuard] },
    { path : 'receita-new/:id/:edit', component : ReceitaNewComponent, canActivate : [AuthGuard] },
    { path : 'receitaingrediente-new/:idReceita', component : ReceitaingredienteNewComponent, canActivate : [AuthGuard] },
    { path : 'modopreparo-new/:idReceita', component : ModopreparoNewComponent, canActivate : [AuthGuard] },
    { path : 'receita-list', component : ReceitaListComponent, canActivate : [AuthGuard] },
    { path : 'receitaingrediente-new/:idReceita/:edit', component : ReceitaingredienteNewComponent, canActivate : [AuthGuard] },
    { path : 'modopreparo-new/:idReceita/:edit', component : ModopreparoNewComponent, canActivate : [AuthGuard] },
    { path : 'cardapio-new', component : CardapioNewComponent, canActivate : [AuthGuard] },
    { path : 'cardapio-new/:id', component : CardapioNewComponent, canActivate : [AuthGuard] },
    { path : 'cardapio-list', component : CardapioListComponent, canActivate : [AuthGuard] },
    { path : 'user-edit/:id', component : UserEditComponent, canActivate : [AuthGuard] }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(ROUTES);