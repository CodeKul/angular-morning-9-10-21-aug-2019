import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btns',
  template: `
    <input type="button" class="btn btn-info" value="Decrement">
    <input type="button" class="ml-1 btn btn-info" value="Increment">
  `,
  styles: []
})
export class BtnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
