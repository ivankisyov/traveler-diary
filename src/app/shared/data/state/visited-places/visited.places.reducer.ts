import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IPlace } from '@shared/data/models/place.interface';
import {
  loadVisitedPlacesSuccess,
  setSelectedPlaceID,
} from './visited.places.actions';
import { IVisitedPlacesState } from './visited.places.model';

export const adapter: EntityAdapter<IPlace> = createEntityAdapter<IPlace>();

export const initialState: IVisitedPlacesState = adapter.getInitialState(
  {
    selectedPlaceID: null,
  }
);

const reducer = createReducer(
  initialState,
  on(loadVisitedPlacesSuccess, (state, { visitedPlaces }) => {
    return adapter.addMany(visitedPlaces, state);
  }),
  on(setSelectedPlaceID, (state, { id }) => {
    return { ...state, selectedPlaceID: id };
  })
);

export function visitedPlacesReducer(
  state: IVisitedPlacesState | undefined,
  action: Action
): IVisitedPlacesState {
  return reducer(state, action);
}
