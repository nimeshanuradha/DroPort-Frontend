import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPilSelComponent } from './own-pil-sel.component';

describe('OwnPilSelComponent', () => {
  let component: OwnPilSelComponent;
  let fixture: ComponentFixture<OwnPilSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnPilSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPilSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
