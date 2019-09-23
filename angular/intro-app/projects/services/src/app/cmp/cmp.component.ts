import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css'],
  providers: [MyService]
})
export class CmpComponent implements OnInit {

  cnt = 0
  constructor(
    private ms: MyService
  ) { }

  ngOnInit() {
  }

  onOk() {
    this.cnt = this.ms.num++
  }
}
