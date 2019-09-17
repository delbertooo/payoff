import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./purchases/purchases.module').then(m => m.PurchasesModule) },
  { path: '', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: '', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
