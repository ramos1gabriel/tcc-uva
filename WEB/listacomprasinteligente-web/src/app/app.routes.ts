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
    { path : 'receita-new/:id', component : ReceitaNewComponent, canActivate : [AuthGuard] },
    { path : 'receitaingrediente-new/:idReceita', component : ReceitaingredienteNewComponent, canActivate : [AuthGuard] },
    { path : 'receitaingrediente-new/:id', component : ReceitaingredienteNewComponent, canActivate : [AuthGuard] }
]

export const routes : ModuleWithProviders = RouterModule.forRoot(ROUTES);