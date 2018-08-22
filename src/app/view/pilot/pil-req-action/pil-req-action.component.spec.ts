import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilReqActionComponent } from './pil-req-action.component';

describe('PilReqActionComponent', () => {
  let component: PilReqActionComponent;
  let fixture: ComponentFixture<PilReqActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilReqActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilReqActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
