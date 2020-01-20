import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoNotasComponent } from './bloco-notas.component';

describe('BlocoNotasComponent', () => {
  let component: BlocoNotasComponent;
  let fixture: ComponentFixture<BlocoNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
