import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Summary, StatisticsService } from '@app-shared';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary$: Observable<Summary>;

  constructor(
    private statisticsService: StatisticsService,
  ) { }

  ngOnInit() {
    this.summary$ = this.statisticsService.loadSummary();
  }
}
