import { CardEvent } from './my-card.event';
import { CardInfo } from './card.domain';
import { Component, Input, Output, EventEmitter, SimpleChanges, DoCheck } from '@angular/core';
import {
  OnChanges,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  config: CardInfo

  @Output()
  okay: EventEmitter<CardEvent> = new EventEmitter()

  constructor() { }

  okClk(parent: string) {
    const evDt: CardEvent = {
      tmp: Date.now(),
      parent: parent,
      card: this.config
    }
    this.okay.emit(evDt)
  }

  ngOnChanges(ch: SimpleChanges) {
    console.log('ngOnChanges',ch)
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
