import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-al',
  template: `
    <div class="alert alert-info mt-2">
      In addition to the error() handler that you provide on subscription, RxJS provides the catchError operator that lets
      you handle known errors in the observable recipe.
    </div>
  `,
  styles: []
})
export class MyAlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
