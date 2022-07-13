import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudlibrosComponent } from './crudlibros.component';

describe('CrudlibrosComponent', () => {
  let component: CrudlibrosComponent;
  let fixture: ComponentFixture<CrudlibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudlibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
