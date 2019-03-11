import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/take';
import { ApiHttp } from '@app-core';

@Injectable()
export class UsersService {

  private static readonly DEFAULT_PURCHASER_KEY = 'payoffDefaultPurchaser';

  private findPurchasers$: Observable<string[]>;

  constructor(
    private http: ApiHttp,
  ) { }

  findPurchasers(): Observable<string[]> {
    if (!this.findPurchasers$) {
      const ttlMillis = 60000;
      this.findPurchasers$ = Observable.defer(() => this.http.get('/available-purchasers'))
        .publishReplay(1, ttlMillis)
        .refCount()
        .take(1);
    }
    return this.findPurchasers$;
  }

  loadDefaultPurchaser(): string {
    return localStorage.getItem(UsersService.DEFAULT_PURCHASER_KEY) || null;
  }

  saveDefaultPurchaser(purchaser: string): void {
    localStorage.setItem(UsersService.DEFAULT_PURCHASER_KEY, purchaser);
  }

}

