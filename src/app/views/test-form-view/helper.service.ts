import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HelperService {
    private message = new BehaviorSubject<string>('En espera de un nombre');
    public customMessage = this.message.asObservable();
    constructor(

    ) {  }

    public changeMessage(msg: string): void {
      this.message.next(msg);
    }
  }