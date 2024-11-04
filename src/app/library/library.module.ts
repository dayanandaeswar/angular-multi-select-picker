import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MultiSelectPickerComponent } from './components/multi-select-picker/multi-select-picker.component';

@NgModule({
  declarations: [
    MultiSelectPickerComponent
  ],
  exports: [
    MultiSelectPickerComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class LibraryModule { }