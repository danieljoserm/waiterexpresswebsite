import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenqueueComponent } from './kitchenqueue.component';

describe('KitchenqueueComponent', () => {
  let component: KitchenqueueComponent;
  let fixture: ComponentFixture<KitchenqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
