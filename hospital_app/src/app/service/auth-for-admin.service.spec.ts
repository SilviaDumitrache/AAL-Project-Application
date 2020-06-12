import { TestBed } from '@angular/core/testing';

import { AuthForAdminService } from './auth-for-admin.service';

describe('AuthForAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthForAdminService = TestBed.get(AuthForAdminService);
    expect(service).toBeTruthy();
  });
});
