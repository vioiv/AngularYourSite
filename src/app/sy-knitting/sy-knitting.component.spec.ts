import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyKnittingComponent } from './sy-knitting.component';

describe('SyKnittingComponent', () => {
  let component: SyKnittingComponent;
  let fixture: ComponentFixture<SyKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
