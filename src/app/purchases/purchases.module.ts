import { NgModule } from '@angular/core';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { SharedModule } from '../shared/shared.module';
import { PurchasesService } from './purchases-service.service';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';

import { FormsModule } from '@angular/forms';
import { UsersService } from './users-service.service';

@NgModule({
  imports: [
    PurchasesRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [PurchasesService, UsersService],
  declarations: [PurchasesListComponent, AddPurchaseComponent]
})
export class PurchasesModule { }
