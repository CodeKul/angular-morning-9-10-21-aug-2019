import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-cmp',
  templateUrl: './my-cmp.component.html',
  styleUrls: ['./my-cmp.component.css']
})
export class MyCmpComponent implements OnInit {

  @ContentChild('dt', { static: true })
  dt: ElementRef

  constructor() { }

  ngOnInit() {
    this.dt.nativeElement.style.border = '3px solid blue'
  }
}
