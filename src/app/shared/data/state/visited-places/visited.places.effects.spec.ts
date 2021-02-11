import { Observable, of } from 'rxjs';
import { VisitedPlacesEffects } from './visited.places.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  addVisitedPlace,
  addVisitedPlaceSuccess,
  deleteVisitedPlace,
} from './visited.places.actions';
import { IPlace } from '@shared/data/models';
import { imageUploadedSuccess } from '../ui/ui.actions';
import {
  deleteObject,
  firestoreObject,
  snackBar,
} from 'app/mock-library';

describe('VisitedPlacesEffects', () => {
  let effects: VisitedPlacesEffects;
  let actions$: Observable<any>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VisitedPlacesEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: AngularFirestore,
          useValue: firestoreObject,
        },
        {
          provide: MatSnackBar,
          useValue: snackBar,
        },
        {
          provide: MatDialog,
          useValue: {
            closeAll: () => {},
          },
        },
      ],
    });

    effects = TestBed.inject(VisitedPlacesEffects);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('addVisitedPlace$', () => {
    it('should handle addVisitedPlace and return addVisitedPlaceSuccess action', () => {
      const place: Partial<IPlace> = {
        visited: true,
        name: {
          en: 'enName',
          bg: 'bgName',
        },
        description: {
          en: 'enDescription',
          bg: 'bgDescription',
        },
      };

      const action = addVisitedPlace({ place });
      const outcome = addVisitedPlaceSuccess();

      testScheduler.run((helpers) => {
        const { hot, expectObservable } = helpers;

        actions$ = hot('-a', { a: action });

        expectObservable(effects.addVisitedPlace$).toBe('-c', {
          c: outcome,
        });
      });
    });
  });

  describe('deleteVisitedPlace$', () => {
    it('should handle deleteVisitedPlace and call firestore delete method', () => {
      const action = deleteVisitedPlace({
        id: 'test-id',
        name: 'test-name',
      });

      actions$ = of(action);

      effects.deleteVisitedPlace$.subscribe(() => {
        expect(deleteObject.delete).toHaveBeenCalled();
        expect(snackBar.openFromComponent).toHaveBeenCalled();
      });
    });
  });

  describe('imageUploaded$', () => {
    it('should handle imageUploadedSuccess and call snackBar openFromComponent method', () => {
      const action = imageUploadedSuccess({ loading: false });

      actions$ = of(action);

      effects.imageUploaded$.subscribe(() => {
        expect(snackBar.openFromComponent).toHaveBeenCalled();
      });
    });
  });
});
