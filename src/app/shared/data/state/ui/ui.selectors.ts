import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUIState } from './ui.model';

export const uiFeatureKey = 'ui';

export const selectUiState = createFeatureSelector<IUIState>(
  uiFeatureKey
);

export const selectLanguage = createSelector(
  selectUiState,
  (state) => state.language
);

export const selectLoading = createSelector(
  selectUiState,
  (state) => state.loading
);
