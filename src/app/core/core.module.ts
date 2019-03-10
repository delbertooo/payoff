import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';

import { ApiHttp } from './api-http.service';

/**
 * This module is reserved for singleton instances!
 * You may put shared directives and services in the base or shared module.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ApiHttp,
    { provide: LOCALE_ID, useValue: 'de-DE' },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}