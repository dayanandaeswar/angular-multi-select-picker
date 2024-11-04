import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotProjectionComponent } from './single-slot-projection.component';

describe('SingleSlotProjectionComponent', () => {
  let component: SingleSlotProjectionComponent;
  let fixture: ComponentFixture<SingleSlotProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSlotProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSlotProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
