import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: 'app/purchases/purchases.module#PurchasesModule' },
  { path: '', loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: '', loadChildren: 'app/statistics/statistics.module#StatisticsModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
