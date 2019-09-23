import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyService } from './my-service.service';
import { CmpComponent } from './cmp/cmp.component'

@NgModule({
  declarations: [
    AppComponent,
    CmpComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
