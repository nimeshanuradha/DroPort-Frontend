import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusMainPageComponent } from './cus-main-page.component';

describe('CusMainPageComponent', () => {
  let component: CusMainPageComponent;
  let fixture: ComponentFixture<CusMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
