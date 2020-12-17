import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLanguage } from '@shared/data/state/ui/ui.selectors';
import { setSelectedPlaceID } from '@shared/data/state/visited-places/visited.places.actions';
import { selectVisitedPlaces } from '@shared/data/state/visited-places/visited.places.selectors';
import {
  combineLatest,
  interval,
  Observable,
  Subscription,
} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPlace } from '@shared/data/models/place.interface';
import { IImageDetail } from '@shared/data/models';
import { selectImageDetails } from '@shared/data/state/image-details/image.details.selectors';
import { AutoUnsubscribe } from '@shared/helpers/decorators';

@Component({
  selector: 'traveler-visited-places',
  templateUrl: './visited-places.component.html',
  styleUrls: ['./visited-places.component.scss'],
})
@AutoUnsubscribe
export class VisitedPlacesComponent implements OnInit, OnDestroy {
  currentLanguage$: Observable<string>;
  places$: Observable<Array<IPlace>>;
  viewModel$: Observable<Array<string | Array<IPlace>>>;
  allImages: Array<IImageDetail>;

  intervalSubscription: Subscription;
  imagesSubscription: Subscription;

  constructor(private store: Store) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe(console.log);

    this.currentLanguage$ = this.store.select(selectLanguage);
    this.places$ = this.store.select(selectVisitedPlaces);

    this.viewModel$ = combineLatest([
      this.currentLanguage$,
      this.places$,
    ]);

    this.imagesSubscription = this.store
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
