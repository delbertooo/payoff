import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { ApiHttp } from '@app-core';


@Injectable()
export class PurchasesService {

  constructor(
    private http: ApiHttp,
  ) { }

  findYears(): Observable<PurchaseYear[]> {
    return this.http.get('/purchases/by-year');
  }

  findPurchases(year: number): Observable<Purchase[]> {
    return this.http.get(`/purchases/by-year/${year}`);
  }

  savePurchase(create: PurchaseCreate): Observable<void> {
    return this.http.post('/purchases', create);
  }

}

export interface PurchaseCreate {
  purchase: string,
  price: number,
  purchaser: string,
  participants: string[],
}

export class PurchaseYear {
  year: number;
  purchases: number;
}

export class Purchase {
  item: string;
  purchaser: string;
  date: string;
  participants: string[];
  formattedPrice: string;
}