import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';
import { SharedModule } from '@app-shared';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ],
  declarations: [PersonalSettingsComponent]
})
export class SettingsModule { }
