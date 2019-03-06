import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyShoppingReviewComponent } from './sy-shopping-review.component';

describe('SyShoppingReviewComponent', () => {
  let component: SyShoppingReviewComponent;
  let fixture: ComponentFixture<SyShoppingReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyShoppingReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyShoppingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
