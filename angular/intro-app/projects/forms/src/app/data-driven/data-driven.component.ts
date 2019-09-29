import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  private fg: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    let compEml = Validators.compose([
      Validators.required, Validators.email
    ])

    let passComp = Validators.compose([
      Validators.required, this.myPass
    ])
    this.fg = this.fb.group({
      usNm: this.fb.control('', Validators.required, this.myAsync),
      pass: this.fb.control('', passComp),
      eml: this.fb.control('', compEml)
    })
  }

  mySub() {
    console.log(this.fg)
  }

  myPass(control: AbstractControl): ValidationErrors | null {
    console.log(`0th ${parseInt(('' + control.value)[0])}  ${parseInt(('' + control.value)[('' + control.value).length - 1])}`)

    if (parseInt(('' + control.value)[0]) + parseInt(('' + control.value)[('' + control.value).length - 1]) >= 10) {
      return null
    }
    return {
      myPass: true
    }
  }

  myAsync(control: AbstractControl): Observable<ValidationErrors | null> {
    return Observable.create(sub => {
      setTimeout(() => {
        if (control.value == 'android') {
          sub.next(null)
        } else {
          sub.next({ myAsync: true })
        }
        sub.complete()
      }, 1500)
    })
  }
}
