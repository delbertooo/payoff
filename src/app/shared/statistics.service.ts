import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiHttp } from '@app-core';


export interface Summary {
  totalPrice: number;
  balances: [{
    user: string;
    balance: number;
  }]
}

@Injectable()
export class StatisticsService {

  constructor(
    private apiHttp: ApiHttp
  ) { }

  loadSummary(): Observable<Summary> {
    return this.apiHttp.get('/summary');
  }
}
