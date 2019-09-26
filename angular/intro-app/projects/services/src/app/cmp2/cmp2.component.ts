import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  dt: string
  constructor(
    private ms: MyService
  ) { }

  ngOnInit() {
    this.ms.em.subscribe((dtStr: string) => this.dt = dtStr)
  }
}
