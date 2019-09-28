import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private actRt: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    console.log(this.actRt)
    this.actRt.params.subscribe(prms => {
      console.log(prms)
    })

    this.actRt.queryParams.subscribe(prms => {
      console.log(prms)
    })
  }

  onClk() {
    console.log(this.actRt)
    this.router.navigate(['chat', 'hi'], {
      queryParams : {
        ttk : Date.now()
      }
    })
  }
}
