import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAnswerComponent } from './to-answer.component';

describe('ToAnswerComponent', () => {
  let component: ToAnswerComponent;
  let fixture: ComponentFixture<ToAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
