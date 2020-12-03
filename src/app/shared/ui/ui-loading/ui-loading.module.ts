import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoadingComponent } from './ui-loading.component';

@NgModule({
  declarations: [UiLoadingComponent],
  imports: [CommonModule],
  exports: [UiLoadingComponent],
})
export class UiLoadingModule {}
