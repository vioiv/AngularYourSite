import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyFlowerComponent } from './sy-flower.component';

describe('SyFlowerComponent', () => {
  let component: SyFlowerComponent;
  let fixture: ComponentFixture<SyFlowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyFlowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
