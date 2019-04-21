import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiHttp } from '@app-core';


export interface Summary {
  formattedTotalPrice: number;
  balances: [{
    user: string;
    formattedBalance: string;
  }]
}

@Injectable()
export class StatisticsService {

  constructor(
    private apiHttp: ApiHttp
  ) { }

  loadSummary(forPurchaser?: string): Observable<Summary> {
    const params = forPurchaser ? { user: forPurchaser } : {};
    return this.apiHttp.get('/summary', { params });
  }
}
