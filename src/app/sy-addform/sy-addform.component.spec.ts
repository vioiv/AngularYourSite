import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyAddformComponent } from './sy-addform.component';

describe('SyAddformComponent', () => {
  let component: SyAddformComponent;
  let fixture: ComponentFixture<SyAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
