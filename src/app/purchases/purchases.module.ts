import { NgModule } from '@angular/core';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { SharedModule } from '@app-shared';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';

import { FormsModule } from '@angular/forms';
import { ParticipantsListComponent } from './participants-list/participants-list.component';

@NgModule({
  imports: [
    PurchasesRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  declarations: [PurchasesListComponent, AddPurchaseComponent, ParticipantsListComponent]
})
export class PurchasesModule { }
