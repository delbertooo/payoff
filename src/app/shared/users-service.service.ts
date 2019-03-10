import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { ApiHttp } from '@app-core';

@Injectable()
export class UsersService {
  
  private static readonly DEFAULT_PURCHASER_KEY = 'payoffDefaultPurchaser';

  constructor(
    private http: ApiHttp,
  ) { }

  findPurchasers(): Observable<string[]> {
    return this.http.get('/available-purchasers');
  }

  loadDefaultPurchaser(): string {
    return localStorage.getItem(UsersService.DEFAULT_PURCHASER_KEY) || null;
  }

  saveDefaultPurchaser(purchaser: string): void {
    localStorage.setItem(UsersService.DEFAULT_PURCHASER_KEY, purchaser);
  }

}

