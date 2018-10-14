import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesListComponent } from './purchases-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PurchasesService } from '@app-shared';

describe('PurchasesListComponent', () => {
  let component: PurchasesListComponent;
  let fixture: ComponentFixture<PurchasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasesListComponent],
      providers: [
        {
          provide: PurchasesService,
          useValue: {
            findPurchases(year) { },
            findYears() { }
          }
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
