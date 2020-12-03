import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPlacesFormComponent } from './ui-places-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UiPlacesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [UiPlacesFormComponent],
})
export class UiPlacesFormModule {}
