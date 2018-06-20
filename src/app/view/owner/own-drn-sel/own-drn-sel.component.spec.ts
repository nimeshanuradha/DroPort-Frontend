import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnDrnSelComponent } from './own-drn-sel.component';

describe('OwnDrnSelComponent', () => {
  let component: OwnDrnSelComponent;
  let fixture: ComponentFixture<OwnDrnSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnDrnSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnDrnSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
