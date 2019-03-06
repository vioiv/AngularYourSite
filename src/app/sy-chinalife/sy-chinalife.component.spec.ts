import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyChinalifeComponent } from './sy-chinalife.component';

describe('SyChinalifeComponent', () => {
  let component: SyChinalifeComponent;
  let fixture: ComponentFixture<SyChinalifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyChinalifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyChinalifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
