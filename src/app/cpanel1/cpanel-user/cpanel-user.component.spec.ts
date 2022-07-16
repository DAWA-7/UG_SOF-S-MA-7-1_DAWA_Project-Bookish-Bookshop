import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpanelUserComponent } from './cpanel-user.component';

describe('CpanelUserComponent', () => {
  let component: CpanelUserComponent;
  let fixture: ComponentFixture<CpanelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpanelUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpanelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
