import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { PurchasesService, UsersService } from '@app-shared';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { evaluateTerm } from './evaluate-term';
import { Router } from '@angular/router';

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
    private router: Router,
  ) { }

  get calculatedPrice(): AbstractControl {
    return this.purchaseForm.get('calculatedPrice');
  }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    const initialPurchaser = this.usersService.loadDefaultPurchaser() || '';
    this.purchaseForm = this.fb.group({
      purchase: ['', Validators.required],
      price: ['', this.validCalculatedPrice()],
      calculatedPrice: [null, [Validators.required, Validators.max(Number.MAX_VALUE)]],
      purchaser: [initialPurchaser, Validators.required],
      participants: [[], [Validators.required, Validators.minLength(1)]],
    });
    this.purchaseForm.get('price').valueChanges.subscribe(price => {
      this.calculatedPrice.setValue(evaluateTerm(price));
      this.purchaseForm.get('price').updateValueAndValidity({ onlySelf: true, emitEvent: false });
    });
  }

  private validCalculatedPrice(): ValidatorFn {
    return (fc: AbstractControl): ValidationErrors | null => {
      if (!this.purchaseForm) {
        return null;
      }
      return this.calculatedPrice.valid ? null : { invalidCalculatedPrice: true };
    }
  }

  save(): void {
    if (!this.purchaseForm.valid) {
      console.warn('invalid', this.purchaseForm.value)
      this.snackBar.open('Please check your input data!', undefined, { duration: 2000 });
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
        () => {
          this.snackBar.open('Purchase added.', undefined, { duration: 2000 })
          this.router.navigate(['/'])
        },
        e => this.snackBar.open('An error occured :(', undefined, { duration: 2000 })
      );
  }

}
