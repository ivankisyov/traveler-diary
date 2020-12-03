import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './image.details.initial.state';
import { IImageDetailsState } from './image.details.model';
import { loadImageDetailsSuccess } from './image.details.actions';

const reducer = createReducer(
  initialState,
  on(loadImageDetailsSuccess, (_, { imageDetails }) => ({
    items: imageDetails,
  }))
);

export function imageDetailsReducer(
  state: IImageDetailsState | undefined,
  action: Action
): IImageDetailsState {
  return reducer(state, action);
}
