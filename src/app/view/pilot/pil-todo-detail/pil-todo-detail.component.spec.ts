import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilTodoDetailComponent } from './pil-todo-detail.component';

describe('PilTodoDetailComponent', () => {
  let component: PilTodoDetailComponent;
  let fixture: ComponentFixture<PilTodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilTodoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilTodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
