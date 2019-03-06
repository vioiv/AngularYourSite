import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyShoppingReviewComponent } from './sy-shopping-review/sy-shopping-review.component';
import { SyFlowerComponent } from './sy-flower/sy-flower.component';
import { SyKnittingComponent } from './sy-knitting/sy-knitting.component';
import { SyChinalifeComponent } from './sy-chinalife/sy-chinalife.component';

const routes: Routes = [{ path: 'shoppingreview', component: SyShoppingReviewComponent }
                      ,{ path: 'flower', component: SyFlowerComponent }
                      ,{ path: 'knitting', component: SyKnittingComponent }
                      ,{ path: 'chinalife', component: SyChinalifeComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
