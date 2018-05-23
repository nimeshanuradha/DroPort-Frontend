import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilFlyHistoryComponent } from './pil-fly-history.component';

describe('PilFlyHistoryComponent', () => {
  let component: PilFlyHistoryComponent;
  let fixture: ComponentFixture<PilFlyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilFlyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilFlyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
