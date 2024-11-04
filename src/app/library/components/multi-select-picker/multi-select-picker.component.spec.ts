import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectPickerComponent } from './multi-select-picker.component';

describe('MultiSelectPickerComponent', () => {
  let component: MultiSelectPickerComponent;
  let fixture: ComponentFixture<MultiSelectPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
