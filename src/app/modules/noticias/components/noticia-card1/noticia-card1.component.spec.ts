import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCard1Component } from './noticia-card1.component';

describe('NoticiaCard1Component', () => {
  let component: NoticiaCard1Component;
  let fixture: ComponentFixture<NoticiaCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
