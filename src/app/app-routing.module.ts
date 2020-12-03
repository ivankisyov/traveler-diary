import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
  },
  { path: 'visited-places', loadChildren: () => import('./features/visited-places/visited-places.module').then(m => m.VisitedPlacesModule) },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
