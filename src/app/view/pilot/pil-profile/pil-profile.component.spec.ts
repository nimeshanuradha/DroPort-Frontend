import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilProfileComponent } from './pil-profile.component';

describe('PilProfileComponent', () => {
  let component: PilProfileComponent;
  let fixture: ComponentFixture<PilProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
