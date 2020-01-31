import { TestBed } from '@angular/core/testing';

import { LessonsServiceService } from './lessons-service.service';

describe('LessonsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonsServiceService = TestBed.get(LessonsServiceService);
    expect(service).toBeTruthy();
  });
});
