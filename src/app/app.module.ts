import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobiledashBoradComponent } from './component/mobiledash-borad/mobiledash-borad.component';
import { MobilecardComponent } from './component/mobilecard/mobilecard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobiledashBoradComponent,
    MobilecardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
