import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyContainerComponent } from './company-container/company-container.component';
import { BundleContainerComponent } from './bundle-container/bundle-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyContainerComponent,
    BundleContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
