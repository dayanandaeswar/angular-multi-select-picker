import { Component } from '@angular/core';

@Component({
  selector: 'app-single-slot-projection',
  template: `<mat-toolbar>
                 <ng-content> </ng-content>
            </mat-toolbar>`,
  styles: ``
})
export class SingleSlotProjectionComponent {

}
