import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';

const routes: Routes = [
  { path: '',  component: PurchasesListComponent },
  { path: 'add', component: AddPurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
