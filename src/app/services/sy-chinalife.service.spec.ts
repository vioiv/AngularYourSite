import { TestBed } from '@angular/core/testing';

import { SyChinalifeService } from './sy-chinalife.service';

describe('SyChinalifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyChinalifeService = TestBed.get(SyChinalifeService);
    expect(service).toBeTruthy();
  });
});
