import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitedPlaceComponent } from './visited-place/visited-place.component';

import { VisitedPlacesComponent } from './visited-places.component';

const routes: Routes = [
  { path: '', component: VisitedPlacesComponent },
  { path: ':id', component: VisitedPlaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitedPlacesRoutingModule {}
