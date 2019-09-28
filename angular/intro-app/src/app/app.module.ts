import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MyAlComponent } from './first/my-al.component';
import { WaCardComponent } from './wa-card/wa-card.component';
import { SalesChatComponent } from './sales-chat/sales-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyAlComponent,
    WaCardComponent,
    SalesChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
