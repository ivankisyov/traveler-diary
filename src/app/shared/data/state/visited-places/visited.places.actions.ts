import { createAction, props } from '@ngrx/store';
import { IPlace } from '../../models/place.interface';

export const loadVisitedPlacesSuccess = createAction(
  '[API -> main-layout] Load Visited Places Success',
  props<{ visitedPlaces: Array<IPlace> }>()
);

export const deleteVisitedPlace = createAction(
  '[manage-visited-places] Delete Visited Place',
  props<{ id: string; name: string }>()
);

export const addVisitedPlace = createAction(
  '[manage-visited-places] Add Visited Place',
  props<{ place: Partial<IPlace> }>()
);

export const addVisitedPlaceSuccess = createAction(
  '[visited places effects] Add Visited Place Success'
);

export const setSelectedPlaceID = createAction(
  '[visited-places] Set SelectedPlaceID',
  props<{ id: string }>()
);

export const setSelectedPlaceIDfromVisitedPlace = createAction(
  '[visited-place] Set SelectedPlaceID',
  props<{ id: string }>()
);
