import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@auth0/auth0-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { ThemePalette } from '@angular/material/core';
import {
  selectLoading,
  selectLanguage,
} from '@shared/data/state/ui/ui.selectors';
import { loadVisitedPlacesSuccess } from '@shared/data/state/visited-places/visited.places.actions';
import { changeLanguage } from '@shared/data/state/ui/ui.actions';
import { Language } from '@shared/data/state/ui/ui.model';
import { Observable } from 'rxjs';
import { IImageDetail, IPlace } from '@shared/data/models';
import { loadImageDetailsSuccess } from '@shared/data/state/image-details/image.details.actions';

@Component({
  selector: 'traveler-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  color: ThemePalette = 'accent';
  loading$: Observable<boolean>;
  language$: Observable<string>;

  constructor(
    private translate: TranslateService,
    public auth: AuthService,
    private firestore: AngularFirestore,
    private store: Store
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.language$ = this.store.select(selectLanguage);

    this.firestore
      .collection('visitedPlaces')
      .snapshotChanges()
      .subscribe((actions) => {
        const visitedPlaces = actions.map((a) => {
          const data = a.payload.doc.data() as IPlace;
          data.id = a.payload.doc.id;
          return data;
        });

        this.store.dispatch(
          loadVisitedPlacesSuccess({
            visitedPlaces,
          })
        );
      });

    this.firestore
      .collection('travelerImageDetails')
      .snapshotChanges()
      .subscribe((actions) => {
        const imageDetails = actions.map((a) => {
          const data = a.payload.doc.data() as IImageDetail;
          data.id = a.payload.doc.id;
          return data;
        });

        this.store.dispatch(
          loadImageDetailsSuccess({
            imageDetails,
          })
        );
      });
  }

  useLanguage(language: Language): void {
    this.translate.use(language);
    this.store.dispatch(changeLanguage({ language }));
  }
}
