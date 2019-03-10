import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { SharedModule } from '@app-shared';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SharedModule,
  ],
  declarations: [SummaryComponent],
  providers: [],
})
export class StatisticsModule { }
