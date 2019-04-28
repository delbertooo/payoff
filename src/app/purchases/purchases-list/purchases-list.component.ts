import { Component, OnInit } from '@angular/core';
import { PurchasesService, PurchaseYear, Purchase } from '@app-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  loadedYears: { [key: number]: Observable<Purchase[]>; };
  years$: Observable<PurchaseYear[]>;

  constructor(private purchasesService: PurchasesService) { }

  ngOnInit() {
    const currentYear = (new Date()).getFullYear();
    this.years$ = this.purchasesService.findYears();
    this.loadedYears = {};
    this.loadPurchases(currentYear);
  }

  loadPurchases(year: number) {
    this.loadedYears[year] = this.purchasesService.findPurchases(year);
  }

  isYearLoaded(year: PurchaseYear): boolean {
    return !!this.loadedYears[year.year];
  }

}
