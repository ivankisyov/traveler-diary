import { Action, createReducer, on } from '@ngrx/store';
import {
  changeLanguage,
  imageUploadedSuccess,
  imageUploading,
  setLoading,
} from './ui.actions';
import { initialState } from './ui.initial.state';
import { IUIState } from './ui.model';

const reducer = createReducer(
  initialState,
  on(changeLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
  // TODO: combine actions with equal loading logic
  on(setLoading, (state, { loading }) => ({
    ...state,
    loading,
  })),
  on(imageUploading, (state, { loading }) => ({
    ...state,
    loading,
  })),
  on(imageUploadedSuccess, (state, { loading }) => ({
    ...state,
    loading,
  }))
);

export function uiReducer(
  state: IUIState | undefined,
  action: Action
): IUIState {
  return reducer(state, action);
}
