import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
  ],
  exports: [
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class MaterialCommonModule { }