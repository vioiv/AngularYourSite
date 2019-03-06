import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyShoppingReviewComponent } from './sy-shopping-review/sy-shopping-review.component';
import { SyFlowerComponent } from './sy-flower/sy-flower.component';
import { SyKnittingComponent } from './sy-knitting/sy-knitting.component';
import { SyChinalifeComponent } from './sy-chinalife/sy-chinalife.component';

@NgModule({
  declarations: [
    AppComponent,
    SyShoppingReviewComponent,
    SyFlowerComponent,
    SyKnittingComponent,
    SyChinalifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
