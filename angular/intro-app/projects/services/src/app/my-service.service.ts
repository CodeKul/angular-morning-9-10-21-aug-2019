import { ConService } from './con.service';
import { EventEmitter, Injectable,  } from '@angular/core'
import { DtService } from './dt.service';
@Injectable({
  providedIn : 'root'
})
export class MyService {

  em: EventEmitter<string> = new EventEmitter()
  num: number = 0
  constructor(
    private con: ConService,
    private dt: DtService
  ) { }

}
