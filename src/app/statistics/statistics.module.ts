import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { StatisticsService } from './statistics.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SharedModule,
  ],
  declarations: [SummaryComponent],
  providers: [StatisticsService],
})
export class StatisticsModule { }
