import { TestBed } from '@angular/core/testing';

import { MissedclassesService } from './missedclasses.service';

describe('MissedclassesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissedclassesService = TestBed.get(MissedclassesService);
    expect(service).toBeTruthy();
  });
});
