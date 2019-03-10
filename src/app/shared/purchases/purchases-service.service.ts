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

  findYears2(): Observable<PurchaseYear[]> {
    return Observable.of([
      { year: 2018, purchases: 1 },
      { year: 2017, purchases: 102 }
    ]).delay(250);
  }

  findPurchases2(year: number): Observable<Purchase[]> {
    return Observable.of([
      {
        item: 'Lachs in Safransoße',
        purchaser: 'delbertooo',
        date: '2017-12-28T15:51:03.000Z',
        participants: ['delbertooo', 'masuuk'],
        price: 13.37,
      },
      {
        item: 'Ei auf Bananenbrot in Weizenschleim',
        purchaser: 'masuuk',
        date: '2017-12-01T15:51:03.000Z',
        participants: ['delbertooo', 'masuuk'],
        price: 13.37,
      }
    ]).delay(250);
  }

  savePurchase2(create: PurchaseCreate): Observable<void> {
    console.log('Save', create);
    return Observable.of(null).delay(250);
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
  price: number;
}