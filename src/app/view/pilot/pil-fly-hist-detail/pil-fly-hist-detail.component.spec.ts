import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilFlyHistDetailComponent } from './pil-fly-hist-detail.component';

describe('PilFlyHistDetailComponent', () => {
  let component: PilFlyHistDetailComponent;
  let fixture: ComponentFixture<PilFlyHistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilFlyHistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilFlyHistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
