import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IVisitedPlacesState } from './visited.places.model';
import { adapter } from './visited.places.reducer';

export const visitedPlacesFeatureKey = 'visitedPlaces';

const getSelectedPlaceID = (state: IVisitedPlacesState) =>
  state.selectedPlaceID;

export const selectVisitedPlacesState = createFeatureSelector<IVisitedPlacesState>(
  visitedPlacesFeatureKey
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectVisitedPlaces = createSelector(
  selectVisitedPlacesState,
  selectAll
);

export const selectVisitedPlacesEntities = createSelector(
  selectVisitedPlacesState,
  selectEntities
);

export const selectCurrentPlaceID = createSelector(
  selectVisitedPlacesState,
  getSelectedPlaceID
);

export const selectCurrentVisitedPlace = createSelector(
  selectVisitedPlacesEntities,
  selectCurrentPlaceID,
  (placesEntities, placeID) => placesEntities[placeID]
);
