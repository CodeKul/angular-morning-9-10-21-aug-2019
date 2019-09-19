import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

  @HostBinding('style.width.px')
  @Input('appSizer')
  wd : number

  constructor() { }

  @HostListener('mouseenter')
  onIn() {
    this.wd = 600
  }

  @HostListener('mouseleave')
  onOut() {
    this.wd = 300
  }
}
