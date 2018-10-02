import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';

const routes: Routes = [
  { path: 'personal-settings', component: PersonalSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
