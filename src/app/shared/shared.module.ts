import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KebapPipe } from './pipes/kebap.pipe';

@NgModule({
  declarations: [KebapPipe],
  imports: [CommonModule],
  exports: [KebapPipe, CommonModule],
})
export class SharedModule {}
