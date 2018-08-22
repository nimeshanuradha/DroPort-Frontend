import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilScheduleComponent } from './pil-schedule.component';

describe('PilScheduleComponent', () => {
  let component: PilScheduleComponent;
  let fixture: ComponentFixture<PilScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
