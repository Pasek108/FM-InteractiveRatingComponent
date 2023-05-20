import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { ThankYouCardComponent } from './components/thank-you-card/thank-you-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingCardComponent,
    ThankYouCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
