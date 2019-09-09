import { CardInfo } from './card.domain';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input()
  config: CardInfo

  constructor() { }

  ngOnInit() {
  }
}
