import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UsersService {
  
  private static readonly DEFAULT_PURCHASER_KEY = 'payoffDefaultPurchaser';

  constructor() { }

  findPurchasers(): Observable<string[]> {
    return Observable.of(['delbertooo', 'masuuk']).delay(250);
  }

  loadDefaultPurchaser(): string {
    return localStorage.getItem(UsersService.DEFAULT_PURCHASER_KEY) || null;
  }

  saveDefaultPurchaser(purchaser: string): void {
    localStorage.setItem(UsersService.DEFAULT_PURCHASER_KEY, purchaser);
  }

}

