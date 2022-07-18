import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCard2Component } from './noticia-card2.component';

describe('NoticiaCard2Component', () => {
  let component: NoticiaCard2Component;
  let fixture: ComponentFixture<NoticiaCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
