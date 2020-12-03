import { createAction, props } from '@ngrx/store';
import { IImageDetail } from './../../models';

export const loadImageDetailsSuccess = createAction(
  '[API -> main-layout] Load Image Details Success',
  props<{ imageDetails: Array<IImageDetail> }>()
);
