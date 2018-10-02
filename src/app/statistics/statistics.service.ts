import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export interface Summary {
  totalPrice: number;
}

@Injectable()
export class StatisticsService {

  constructor() { }

  loadSummary(): Observable<Summary> {
    return Observable.of({
      totalPrice: 13337.37,
    }).delay(250);
  }
}
