import { SalesChatComponent } from './sales-chat/sales-chat.component';
import { DashComponent } from './dash/dash.component';
import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashGuard } from './dash.guard';

const dashRoutes: Routes = [
  { path: 'sales', component: SalesChatComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'chat/:dsfdfs', component: ChatComponent },
  { path: 'dash', component: DashComponent, children: dashRoutes, canActivate: [DashGuard] },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
