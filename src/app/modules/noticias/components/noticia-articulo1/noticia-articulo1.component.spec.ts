import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaArticulo1Component } from './noticia-articulo1.component';

describe('NoticiaArticulo1Component', () => {
  let component: NoticiaArticulo1Component;
  let fixture: ComponentFixture<NoticiaArticulo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaArticulo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaArticulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
