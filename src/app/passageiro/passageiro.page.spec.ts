import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroPage } from './passageiro.page';

describe('PassageiroPage', () => {
  let component: PassageiroPage;
  let fixture: ComponentFixture<PassageiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
