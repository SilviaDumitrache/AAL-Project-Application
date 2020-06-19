import { TestBed } from '@angular/core/testing';

import { PacientiService } from './pacienti.service';

describe('PacientiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacientiService = TestBed.get(PacientiService);
    expect(service).toBeTruthy();
  });
});
