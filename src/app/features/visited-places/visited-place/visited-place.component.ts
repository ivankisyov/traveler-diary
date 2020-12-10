import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPlace } from '@shared/data/models/place.interface';
import { selectLanguage } from '@shared/data/state/ui/ui.selectors';
import {
  selectCurrentPlaceID,
  selectCurrentVisitedPlace,
} from '@shared/data/state/visited-places/visited.places.selectors';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { IImageDetail } from '@shared/data/models/image.detail.interface';
import { selectImageDetails } from '@shared/data/state/image-details/image.details.selectors';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ActivatedRoute } from '@angular/router';
import { setSelectedPlaceIDfromVisitedPlace } from '@shared/data/state/visited-places/visited.places.actions';

@Component({
  selector: 'traveler-visited-place',
  templateUrl: './visited-place.component.html',
  styleUrls: ['./visited-place.component.scss'],
})
export class VisitedPlaceComponent implements OnInit {
  currentLanguage$: Observable<string>;

  images$: Observable<Array<IImageDetail>>;
  galleryImages$: Observable<Array<GalleryItem>>;
  coverImage$: Observable<IImageDetail>;
  place$: Observable<IPlace>;
  viewModel$;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store
      .select(selectCurrentPlaceID)
      .pipe(
        map((id) => {
          if (!id) {
            const routeParamId = this.route.snapshot.paramMap.get(
              'id'
            );
            this.store.dispatch(
              setSelectedPlaceIDfromVisitedPlace({ id: routeParamId })
            );
          }
        })
      )
      .subscribe();

    this.images$ = this.store.select(selectImageDetails).pipe(
      filter((images) => images.length > 0),
      withLatestFrom(this.store.select(selectCurrentVisitedPlace)),
      map(([images, place]) => {
        return images.filter((image) => image.placeId === place.id);
      })
    );

    this.galleryImages$ = this.images$.pipe(
      map((images) =>
        images.map(
          (image) =>
            new ImageItem({
              src: image.imageUrl,
              thumb: image.imageUrl,
            })
        )
      )
    );

    this.currentLanguage$ = this.store.select(selectLanguage);
    this.place$ = this.store.select(selectCurrentVisitedPlace);

    this.coverImage$ = this.images$.pipe(
      map((images) => images.filter((image) => image.isCoverPhoto)[0])
    );

    this.viewModel$ = combineLatest([
      this.currentLanguage$,
      this.place$,
      this.coverImage$,
    ]);
  }
}
