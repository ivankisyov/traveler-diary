import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarComponent } from './components/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    SnackbarComponent,
  ],
})
export class UiMaterialModule {}
