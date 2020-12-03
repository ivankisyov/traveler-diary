import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IImageDetailsState } from './image.details.model';

export const imageDetailsFeatureKey = 'imageDetails';

export const selectImageDetailsState = createFeatureSelector<IImageDetailsState>(
  imageDetailsFeatureKey
);

export const selectImageDetails = createSelector(
  selectImageDetailsState,
  (state) => state.items
);
