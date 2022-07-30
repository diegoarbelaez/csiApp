import { TestBed } from '@angular/core/testing';

import { PanicoGuard } from './panico.guard';

describe('PanicoGuard', () => {
  let guard: PanicoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PanicoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
