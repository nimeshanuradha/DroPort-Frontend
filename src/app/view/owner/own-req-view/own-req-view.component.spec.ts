import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnReqViewComponent } from './own-req-view.component';

describe('OwnReqViewComponent', () => {
  let component: OwnReqViewComponent;
  let fixture: ComponentFixture<OwnReqViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnReqViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnReqViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
