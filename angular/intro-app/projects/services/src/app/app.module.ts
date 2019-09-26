import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyService } from './my-service.service';
import { CmpComponent } from './cmp/cmp.component';
import { Cmp2Component } from './cmp2/cmp2.component'

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent,
    Cmp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
