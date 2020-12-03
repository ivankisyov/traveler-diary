import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageVisitedPlacesComponent } from './manage-visited-places/manage-visited-places.component';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  {
    path: 'manage-visited-places',
    component: ManageVisitedPlacesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
