import { TestBed } from '@angular/core/testing';

import { AnsweredQuestionsService } from './answered-questions.service';

describe('AnsweredQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnsweredQuestionsService = TestBed.get(AnsweredQuestionsService);
    expect(service).toBeTruthy();
  });
});
