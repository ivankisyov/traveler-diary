import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MainLayoutComponent } from './main-layout/main-layout.component';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@shared/data/state/root.reducer';
import { UiLoadingModule } from '@shared/ui/ui-loading/ui-loading.module';
import { environment } from 'environments/environment';
import { SharedModule } from '@shared/shared.module';

// required for AOT compilation
export function HttpLoaderFactory(
  http: HttpClient
): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HomeComponent,
    MainLayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    UiLoadingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    AuthModule,
  ],
  exports: [
    HomeComponent,
    MainLayoutComponent,
    PageNotFoundComponent,
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import only in AppModule'
      );
    }
  }
}
