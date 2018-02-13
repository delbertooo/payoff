import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyDateComponent } from './fancy-date.component';

describe('FancyDateComponent', () => {
  let component: FancyDateComponent;
  let fixture: ComponentFixture<FancyDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
