import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyDateComponent } from './fancy-date/fancy-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatTooltipModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatChipsModule, MatSnackBarModule, MatSidenavModule
} from '@angular/material';

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
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FancyDateComponent,
  ]
})
export class SharedModule { }
