import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDronesComponent } from './my-drones.component';

describe('MyDronesComponent', () => {
  let component: MyDronesComponent;
  let fixture: ComponentFixture<MyDronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
