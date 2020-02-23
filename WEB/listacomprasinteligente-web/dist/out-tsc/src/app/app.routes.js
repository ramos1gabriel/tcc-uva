import { SummaryComponent } from './components/summary/summary.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
export var ROUTES = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'user-new', component: UserNewComponent, canActivate: [AuthGuard] },
    { path: 'user-new/:id', component: UserNewComponent, canActivate: [AuthGuard] },
    { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'ticket-list', component: TicketListComponent, canActivate: [AuthGuard] },
    { path: 'ticket-new', component: TicketNewComponent, canActivate: [AuthGuard] },
    { path: 'ticket-new/:id', component: TicketNewComponent, canActivate: [AuthGuard] },
    { path: 'ticket-detail/:id', component: TicketDetailComponent, canActivate: [AuthGuard] },
    { path: 'summary', component: SummaryComponent, canActivate: [AuthGuard] }
];
export var routes = RouterModule.forRoot(ROUTES);
//# sourceMappingURL=app.routes.js.map