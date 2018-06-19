import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilRegComponent } from './pil-reg.component';

describe('PilRegComponent', () => {
  let component: PilRegComponent;
  let fixture: ComponentFixture<PilRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
