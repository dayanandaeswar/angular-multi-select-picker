import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MultiSelectPickerComponent } from './components/multi-select-picker/multi-select-picker.component';
import { SingleSlotProjectionComponent } from './components/single-slot-projection/single-slot-projection.component';

@NgModule({
  declarations: [
    MultiSelectPickerComponent,
    SingleSlotProjectionComponent
  ],
  exports: [
    MultiSelectPickerComponent,
    SingleSlotProjectionComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LibraryModule { }