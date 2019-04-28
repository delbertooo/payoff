import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceColoredComponent } from './balance-colored.component';

describe('BalanceColoredComponent', () => {
  let component: BalanceColoredComponent;
  let fixture: ComponentFixture<BalanceColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
