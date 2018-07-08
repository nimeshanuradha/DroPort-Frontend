import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusDrnSelectComponent } from './cus-drn-select.component';

describe('CusDrnSelectComponent', () => {
  let component: CusDrnSelectComponent;
  let fixture: ComponentFixture<CusDrnSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusDrnSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusDrnSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
