import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiMaterialModule } from '@shared/ui/ui-material/ui-material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { GALLERY_CONFIG } from 'ng-gallery';
// auth0
import { AuthModule } from '@auth0/auth0-angular';

import {
  environment as env,
  environment,
} from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    UiMaterialModule,
    // auth0
    AuthModule.forRoot({
      ...env.auth,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover',
        loadingStrategy: 'preload',
        loop: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
