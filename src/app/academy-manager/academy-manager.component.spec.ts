import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyManagerComponent } from './academy-manager.component';

describe('AcademyManagerComponent', () => {
  let component: AcademyManagerComponent;
  let fixture: ComponentFixture<AcademyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
