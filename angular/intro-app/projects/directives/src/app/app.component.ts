import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isVs: boolean = false

  mobiles: Array<Mobile> = [
    { nm: 'HTC', os: 'Android' },
    { nm: 'Apple', os: 'iOS' },
    { nm: 'Samsung', os: 'Symbian' },
    { nm: 'Motorola', os: 'RIM' },
    { nm: 'Microsoft', os: 'Mango' }
  ]
}

export interface Mobile {
  nm: string
  os: string
}
