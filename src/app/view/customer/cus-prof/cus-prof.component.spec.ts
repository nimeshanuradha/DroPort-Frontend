import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusProfComponent } from './cus-prof.component';

describe('CusProfComponent', () => {
  let component: CusProfComponent;
  let fixture: ComponentFixture<CusProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
