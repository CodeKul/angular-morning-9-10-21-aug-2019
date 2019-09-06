import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alTxt = `
    The Angular application manages what the user sees and can do, achieving this through the interaction of a component class instance (the component)and its user-facing template.
  `;

  typ = 'text'
  dtAt = 'hi to codekul'
  brd = '1px solid red'
  sty = {
    border : '1px solid blue',
    'background-color' : 'black'
  }

  clkFn(ev: MouseEvent) {
    console.log(ev)
  }
}
