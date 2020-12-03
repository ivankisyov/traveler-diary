import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUploadImageFormComponent } from './ui-upload-image-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UiUploadImageFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    TranslateModule.forChild(),
  ],
  exports: [UiUploadImageFormComponent],
})
export class UiUploadImageFormModule {}
