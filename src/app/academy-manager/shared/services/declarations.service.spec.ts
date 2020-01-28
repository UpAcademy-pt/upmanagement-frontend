import { TestBed } from '@angular/core/testing';

import { DeclarationsService } from './declarations.service';

describe('DeclarationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeclarationsService = TestBed.get(DeclarationsService);
    expect(service).toBeTruthy();
  });
});
