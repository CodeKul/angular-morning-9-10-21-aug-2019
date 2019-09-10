import { CardEvent } from './my-card.event';
import { CardInfo } from './card.domain';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input()
  config: CardInfo

  @Output()
  okay: EventEmitter<CardEvent> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  okClk(parent: string) {
    const evDt: CardEvent = {
      tmp: Date.now(),
      parent: parent,
      card : this.config
    }
    this.okay.emit(evDt)
  }
}
