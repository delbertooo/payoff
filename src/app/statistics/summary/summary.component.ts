import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Summary, StatisticsService, UsersService } from '@app-shared';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary$: Observable<Summary>;
  purchasers$: Observable<string[]>;
  purchaserForm: FormGroup;

  constructor(
    private statisticsService: StatisticsService,
    private usersService: UsersService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.purchasers$ = this.usersService.findPurchasers();
    this.purchaserForm = this.fb.group({
      purchaser: [''],
    });
    this.purchaserForm.get('purchaser').valueChanges.subscribe(p => this.reloadSummary());
    const initialPurchaser = this.usersService.loadDefaultPurchaser() || '';
    this.purchaserForm.get('purchaser').setValue(initialPurchaser);
  }

  private reloadSummary() {
    this.summary$ = this.statisticsService.loadSummary(this.purchaserForm.get('purchaser').value);
  }
}
