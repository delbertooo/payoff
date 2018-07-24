import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UsersService } from '../users-service.service';
import { Observable } from 'rxjs/Observable';
import { PurchasesService } from '../purchases-service.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { evaluateTerm } from './evaluate-term';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {
  purchasers$: Observable<string[]>;
  purchaseForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private purchasesService: PurchasesService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) { }

  get calculatedPrice(): AbstractControl {
    return this.purchaseForm.get('calculatedPrice');
  }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    const initialPurchaser = this.usersService.loadDefaultPurchaser() || '';
    this.purchaseForm = this.fb.group({
      purchase: ['', Validators.required],
      price: ['', Validators.required],
      calculatedPrice: [null, Validators.required],
      purchaser: [initialPurchaser, Validators.required],
      participants: [[], Validators.compose([Validators.required, Validators.minLength(1)])],
    });
    this.purchaseForm.get('price').valueChanges.subscribe(price => this.purchaseForm.patchValue({
        calculatedPrice: evaluateTerm(price),
    }));
  }

  save(): void {
    if (!this.purchaseForm.valid) {
      console.warn('invalid', this.purchaseForm.value)
      this.snackBar.open('Please check your input data!', undefined, {duration: 2000});
      return;
    }
    const val = this.purchaseForm.value;
    this.purchasesService
      .savePurchase({
        purchase: val.purchase,
        price: val.calculatedPrice,
        purchaser: val.purchaser,
        participants: val.participants,
      })
      .subscribe(
        () => console.log('redirect to list'),
        e => this.snackBar.open('An error occured :(', undefined, {duration: 2000})
      );
  }

}
