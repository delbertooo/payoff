import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseComponent } from './add-purchase.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { PurchasesService, UsersService } from '@app-shared';

describe('AddPurchaseComponent', () => {
  let component: AddPurchaseComponent;
  let fixture: ComponentFixture<AddPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ AddPurchaseComponent ],
      providers: [
        FormBuilder,
        { provide: PurchasesService, useValue: {} },
        { provide: UsersService, useValue: {findPurchasers() { }, loadDefaultPurchaser() { }} },
        { provide: MatSnackBar, useValue: {} },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
