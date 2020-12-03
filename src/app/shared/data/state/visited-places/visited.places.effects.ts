import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  addVisitedPlace,
  addVisitedPlaceSuccess,
  deleteVisitedPlace,
} from './visited.places.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@shared/ui/ui-material/components/snackbar.component';
import { imageUploadedSuccess, setLoading } from '../ui/ui.actions';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class VisitedPlacesEffects {
  addVisitedPlace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVisitedPlace),
      tap(() => this.store.dispatch(setLoading({ loading: true }))),
      switchMap((action) => {
        return from(
          this.firestore.collection('visitedPlaces').add(action.place)
        ).pipe(
          tap(() => {
            this.dialog.closeAll();

            this.store.dispatch(setLoading({ loading: false }));

            this.snackBar.openFromComponent(SnackbarComponent, {
              data: `${action.place.name.en} is added!`,
              panelClass: 'success',
              duration: 4000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }),
          map(() => addVisitedPlaceSuccess())
        );
      })
    )
  );

  deleteVisitedPlace$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteVisitedPlace),
        switchMap((action) => {
          return from(
            this.firestore
              .collection('visitedPlaces')
              .doc(action.id)
              .delete()
          ).pipe(
            tap(() => {
              this.snackBar.openFromComponent(SnackbarComponent, {
                data: `${action.name} was deleted!`,
                panelClass: 'success',
                duration: 4000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  imageUploaded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(imageUploadedSuccess),
        tap(() => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            data: 'Image added!',
            panelClass: 'success',
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    private store: Store,
    private dialog: MatDialog
  ) {}
}
