import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterqueueComponent } from './waiterqueue.component';

describe('WaiterqueueComponent', () => {
  let component: WaiterqueueComponent;
  let fixture: ComponentFixture<WaiterqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
