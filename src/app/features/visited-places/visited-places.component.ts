import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLanguage } from '@shared/data/state/ui/ui.selectors';
import { setSelectedPlaceID } from '@shared/data/state/visited-places/visited.places.actions';
import { selectVisitedPlaces } from '@shared/data/state/visited-places/visited.places.selectors';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPlace } from '@shared/data/models/place.interface';
import { IImageDetail } from '@shared/data/models';
import { selectImageDetails } from '@shared/data/state/image-details/image.details.selectors';

@Component({
  selector: 'traveler-visited-places',
  templateUrl: './visited-places.component.html',
  styleUrls: ['./visited-places.component.scss'],
})
export class VisitedPlacesComponent implements OnInit {
  currentLanguage$: Observable<string>;
  places$: Observable<Array<IPlace>>;
  viewModel$: Observable<Array<string | Array<IPlace>>>;
  allImages: Array<IImageDetail>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentLanguage$ = this.store.select(selectLanguage);
    this.places$ = this.store.select(selectVisitedPlaces);

    this.viewModel$ = combineLatest([
      this.currentLanguage$,
      this.places$,
    ]);

    this.store
      .select(selectImageDetails)
      .pipe(
        tap((images) => (this.allImages = images)),
        map((images) => images)
      )
      .subscribe();
  }

  setSelectedPlaceID(id: string): void {
    this.store.dispatch(setSelectedPlaceID({ id }));
  }

  selectCoverPhoto(placeId: string): IImageDetail {
    return this.allImages.filter(
      (image) => image.isCoverPhoto && image.placeId === placeId
    )[0];
  }
}
