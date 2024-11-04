import { Component } from '@angular/core';
import { MultiSelectPickerModel } from './shared/model/multi-select-picker.model';

const data = '[{"id":1,"key":"loginName","value":"Login Name"},{"id":2,"key":"firstName","value":"First Name"},{"id":3,"key":"lastName","value":"Last Name"},{"id":4,"key":"middleName","value":"Middle Name"},{"id":5,"key":"lastLoginDateTime","value":"Last Login Date Time"},{"id":6,"key":"contactPreference","value":"Contact Preference"},{"id":7,"key":"country","value":"User Country"},{"id":8,"key":"userStatus","value":"User Status"},{"id":9,"key":"userRiskStatus","value":"User Risk Status"}]';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-multi-select-picker';

  sourceItems: MultiSelectPickerModel[] = JSON.parse(data);
  targetItems: MultiSelectPickerModel[] = [];
  selectedItems: MultiSelectPickerModel[] = [];

  selectedTargetItems(data: MultiSelectPickerModel[]) {
    this.selectedItems = data;
  }

  itemSelected(data: MultiSelectPickerModel) {
    data.selected = !data.selected;
  }

  moveAll(direction: string) {
    if (direction === 'left') {
      this.sourceItems = [...this.sourceItems, ...this.targetItems];
      this.sourceItems.forEach(element => element.selected = false)
      this.targetItems = [];
    } else if (direction === 'right') {
      this.targetItems = [...this.targetItems, ...this.sourceItems];
      this.targetItems.forEach(element => element.selected = false)
      this.sourceItems = [];
    } else {
      alert('Invalid direction event triggered');
    }
    this.sortRecords();
  }

  moveSelected(direction: string) {
    if (direction === 'left') {
      const selectedItems = this.targetItems.filter(element => element.selected);
      const nonSelectedItems = this.targetItems.filter(element => !element.selected);
      selectedItems.map(element => element.selected = false);
      this.sourceItems = [...this.sourceItems, ...selectedItems];
      this.targetItems = [...nonSelectedItems];
    } else if (direction === 'right') {
      const selectedItems = this.sourceItems.filter(element => element.selected);
      const nonSelectedItems = this.sourceItems.filter(element => !element.selected);
      selectedItems.map(element => element.selected = false);
      this.targetItems = [...this.targetItems, ...selectedItems];
      this.sourceItems = [...nonSelectedItems];
    } else {
      alert('Invalid direction event triggered');
    }
    this.sortRecords();
  }

  sortRecords() {
    this.sourceItems?.sort((a, b) => a.value.localeCompare(b.value))
  }

}
