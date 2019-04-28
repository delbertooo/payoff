import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyDateComponent } from './fancy-date/fancy-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatTooltipModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatChipsModule, MatSnackBarModule, MatSidenavModule
} from '@angular/material';
import { PurchasesService } from './purchases/purchases-service.service';
import { UsersService } from './users-service.service';
import { StatisticsService } from './statistics.service';
import { BalanceColoredComponent } from './balance-colored/balance-colored.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FancyDateComponent,
    BalanceColoredComponent,
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FancyDateComponent,
    BalanceColoredComponent,
  ],
  providers: [
    PurchasesService,
    UsersService,
    StatisticsService,
  ]
})
export class SharedModule { }
