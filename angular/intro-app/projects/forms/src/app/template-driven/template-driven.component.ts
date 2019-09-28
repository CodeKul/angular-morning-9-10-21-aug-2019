import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  emlPat = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  constructor() { }

  ngOnInit() {
  }

  onSub(frm : NgForm) {
    console.log(frm)
  }
}
