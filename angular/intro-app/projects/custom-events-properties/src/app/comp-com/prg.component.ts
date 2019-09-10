import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prg',
  template: `
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
  `,
  styles: []
})
export class PrgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
