import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UsersService } from '../users-service.service';
import { Observable } from 'rxjs/Observable';
import { PurchasesService, PurchaseCreate } from '../purchases-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {
  model: PurchaseCreate;
  purchasers$: Observable<string[]>;
  @ViewChild('form')
  form: NgForm;

  pricePreview = undefined;

  constructor(
    private usersService: UsersService,
    private purchasesService: PurchasesService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    this.model = {
      price: undefined,
      purchaser: this.usersService.loadDefaultPurchaser() || '',
      participants: undefined,
    };
  }

  save(): void {
    if (!this.form.valid) {
      this.snackBar.open('Please check your inputs!', undefined, {duration: 2000});
      return;
    }
    this.purchasesService
      .savePurchase({
        price: this.pricePreview,
        purchaser: this.model.purchaser,
        participants: this.model.participants,
      })
      .subscribe(
        () => console.log('redirect to list'),
        e => this.snackBar.open('An error occured :(', undefined, {duration: 2000})
      );
  }

  evaluateTerm(input: string): number {
    let result;
    const sanitizedTerm = input.replace(/,/g, '.').replace(/[^0-9().+\-*/]/g, '');
    try {
      eval(`result = ${sanitizedTerm};`);
    } catch (e) {
      result = undefined;
    }
    return result;
  }

}
