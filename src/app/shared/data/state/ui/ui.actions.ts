import { createAction, props } from '@ngrx/store';
import { Language } from './ui.model';

export const changeLanguage = createAction(
  '[main layout] Change Language',
  props<{ language: Language }>()
);

export const setLoading = createAction(
  '[UI] Loading',
  props<{ loading: boolean }>()
);

export const imageUploading = createAction(
  '[UI Upload Image Form] Image is being uploaded',
  props<{ loading: boolean }>()
);

export const imageUploadedSuccess = createAction(
  '[UI Upload Image Form] Image is uploaded',
  props<{ loading: boolean }>()
);
