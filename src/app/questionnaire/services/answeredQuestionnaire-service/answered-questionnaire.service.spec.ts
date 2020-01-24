import { TestBed } from '@angular/core/testing';

import { AnsweredQuestionnaireService } from './answered-questionnaire.service';

describe('AnsweredQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnsweredQuestionnaireService = TestBed.get(AnsweredQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
