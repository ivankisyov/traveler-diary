import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state.model';
import { imageDetailsReducer } from './image-details/image.details.reducer';
import { imageDetailsFeatureKey } from './image-details/image.details.selectors';
import { uiReducer } from './ui/ui.reducer';
import { uiFeatureKey } from './ui/ui.selectors';
import { visitedPlacesReducer } from './visited-places/visited.places.reducer';
import { visitedPlacesFeatureKey } from './visited-places/visited.places.selectors';

export const reducers: ActionReducerMap<AppState> = {
  [uiFeatureKey]: uiReducer,
  [visitedPlacesFeatureKey]: visitedPlacesReducer,
  [imageDetailsFeatureKey]: imageDetailsReducer,
};
