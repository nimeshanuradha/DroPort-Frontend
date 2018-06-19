import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegCustomersComponent } from './admin-reg-customers.component';

describe('AdminRegCustomersComponent', () => {
  let component: AdminRegCustomersComponent;
  let fixture: ComponentFixture<AdminRegCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
