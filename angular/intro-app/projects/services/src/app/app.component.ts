import { Component, Injectable } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [MyService]
})
export class AppComponent {
  title = 'services';
}
