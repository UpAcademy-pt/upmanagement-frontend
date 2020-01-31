import { TestBed, async, inject } from '@angular/core/testing';

import { GuardRoleGuard } from './guard-role.guard';

describe('GuardRoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardRoleGuard]
    });
  });

  it('should ...', inject([GuardRoleGuard], (guard: GuardRoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
