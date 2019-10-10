import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoPage } from './piloto.page';

describe('PilotoPage', () => {
  let component: PilotoPage;
  let fixture: ComponentFixture<PilotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
