import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { VisitedPlacesRoutingModule } from './visited-places-routing.module';
import { VisitedPlacesComponent } from './visited-places.component';
import { UiMaterialModule } from '@shared/ui/ui-material/ui-material.module';
import { SharedModule } from '@shared/shared.module';
import { VisitedPlaceComponent } from './visited-place/visited-place.component';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  declarations: [VisitedPlacesComponent, VisitedPlaceComponent],
  imports: [
    SharedModule,
    VisitedPlacesRoutingModule,
    GalleryModule,
    UiMaterialModule,
    TranslateModule.forChild(),
  ],
})
export class VisitedPlacesModule {}
