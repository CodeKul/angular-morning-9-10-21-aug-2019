import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { SalesChatComponent } from './sales-chat/sales-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DashComponent,
    LoginComponent,
    SalesChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
