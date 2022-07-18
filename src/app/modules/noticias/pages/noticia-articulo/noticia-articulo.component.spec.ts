import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaArticuloComponent } from './noticia-articulo.component';

describe('NoticiaArticuloComponent', () => {
  let component: NoticiaArticuloComponent;
  let fixture: ComponentFixture<NoticiaArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
