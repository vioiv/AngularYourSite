import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyShoppingReviewComponent } from './sy-shopping-review/sy-shopping-review.component';
import { SyFlowerComponent } from './sy-flower/sy-flower.component';
import { SyKnittingComponent } from './sy-knitting/sy-knitting.component';
import { SyChinalifeComponent } from './sy-chinalife/sy-chinalife.component';
import { SyAddformComponent } from './sy-addform/sy-addform.component';

@NgModule({
  declarations: [
    AppComponent,
    SyShoppingReviewComponent,
    SyFlowerComponent,
    SyKnittingComponent,
    SyChinalifeComponent,
    SyAddformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
