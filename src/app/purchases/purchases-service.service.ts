import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class PurchasesService {

  constructor() { }

  findYears(): Observable<PurchaseYear[]> {
    return Observable.of([
      { year: 2017, purchases: 1 },
      { year: 2016, purchases: 102 }
    ]).delay(250);
  }

  findPurchases(year: number): Observable<Purchase[]> {
    return Observable.of([
      {
        purchaser: 'delbertooo',
        date: '2017-12-28T15:51:03.000Z',
        participants: ['delbertooo', 'masuuk'],
        price: 13.37,
      }
    ]).delay(250);
  }

}


export class PurchaseYear {
  year: number;
  purchases: number;
}

export class Purchase {
  purchaser: string;
  date: string;
  participants: string[];
  price: number;
}