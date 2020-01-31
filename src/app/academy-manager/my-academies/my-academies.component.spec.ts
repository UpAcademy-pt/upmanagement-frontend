import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcademiesComponent } from './my-academies.component';

describe('MyAcademiesComponent', () => {
  let component: MyAcademiesComponent;
  let fixture: ComponentFixture<MyAcademiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAcademiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAcademiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
