import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilToDoComponent } from './pil-to-do.component';

describe('PilToDoComponent', () => {
  let component: PilToDoComponent;
  let fixture: ComponentFixture<PilToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
