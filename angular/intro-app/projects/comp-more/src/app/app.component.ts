import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('rw', { static: false })
  rw: ElementRef

  @ViewChild('dt', { static: false })
  dt: ElementRef

  title = 'comp-more';

  clk() {
    this.rw.nativeElement.style.border = '2px solid red'
    // console.log(usNm)
    // usNm.style.border = '1px solid red'

    this.dt.nativeElement.style.border = '2px solid red'
  }
}
