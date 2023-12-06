import { TestBed } from '@angular/core/testing';

import { ConductorguardGuard } from './conductorguard.guard';

describe('ConductorguardGuard', () => {
  let guard: ConductorguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConductorguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
