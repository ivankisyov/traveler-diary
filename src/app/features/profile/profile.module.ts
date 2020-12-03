import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { ManageVisitedPlacesComponent } from './manage-visited-places/manage-visited-places.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EffectsModule } from '@ngrx/effects';
import { VisitedPlacesEffects } from '@shared/data/state/visited-places/visited.places.effects';
import { UiMaterialModule } from '@shared/ui/ui-material/ui-material.module';
import { UiPlacesFormModule } from '@shared/ui/ui-places-form/ui-places-form.module';
import { UiUploadImageFormModule } from '@shared/ui/ui-upload-image-form/ui-upload-image-form.module';

@NgModule({
  declarations: [ProfileComponent, ManageVisitedPlacesComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    UiMaterialModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    TranslateModule.forChild(),
    UiPlacesFormModule,
    UiUploadImageFormModule,
    EffectsModule.forFeature([VisitedPlacesEffects]),
  ],
})
export class ProfileModule {}
