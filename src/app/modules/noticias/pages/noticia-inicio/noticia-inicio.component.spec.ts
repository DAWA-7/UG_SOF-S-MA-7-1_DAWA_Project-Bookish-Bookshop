import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaInicioComponent } from './noticia-inicio.component';

describe('NoticiaInicioComponent', () => {
  let component: NoticiaInicioComponent;
  let fixture: ComponentFixture<NoticiaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
