import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {
  model: any;
  purchasers$: Observable<string[]>;

  pricePreview = undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    this.model = {
      price: undefined,
      purchaser: this.usersService.loadDefaultPurchaser() || ''
    };
  }

  evaluateTerm(input: string): number {
    let result;
    const sanitizedTerm = input.replace(/,/g, '.').replace(/[^0-9().+\-*\\]/g, '');
    try {
      eval(`result = ${sanitizedTerm};`);
    } catch (e) {
      result = undefined;
    }
    return result;
  }

}
