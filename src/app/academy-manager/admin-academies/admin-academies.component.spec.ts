import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcademiesComponent } from './admin-academies.component';

describe('AdminAcademiesComponent', () => {
  let component: AdminAcademiesComponent;
  let fixture: ComponentFixture<AdminAcademiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAcademiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcademiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
