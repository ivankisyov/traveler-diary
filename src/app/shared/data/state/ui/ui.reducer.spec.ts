import {
  changeLanguage,
  imageUploadedSuccess,
  imageUploading,
  setLoading,
} from './ui.actions';
import { initialState } from './ui.initial.state';
import { uiReducer } from './ui.reducer';

describe('uiReducer', () => {
  describe('unknow action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'unknown',
      };

      const state = uiReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('changeLanguage action', () => {
    it('should change the language to BG', () => {
      const language = 'bg';
      const action = changeLanguage({
        language,
      });

      const state = uiReducer(initialState, action);
      expect(state.language).toBe(language);
    });

    it('should change the language to EN', () => {
      const language = 'en';
      const action = changeLanguage({
        language,
      });

      const state = uiReducer(initialState, action);
      expect(state.language).toBe(language);
    });
  });

  describe('setLoading action', () => {
    it('should change loading to true', () => {
      const action = setLoading({
        loading: true,
      });

      const state = uiReducer(initialState, action);
      expect(state.loading).toBeTrue();
    });

    it('should change loading to false', () => {
      const action = setLoading({
        loading: false,
      });

      const state = uiReducer(initialState, action);
      expect(state.loading).toBeFalse();
    });
  });

  describe('imageUploading action', () => {
    it('should change loading to true', () => {
      const action = imageUploading({
        loading: true,
      });

      const state = uiReducer(initialState, action);
      expect(state.loading).toBeTrue();
    });

    it('should change loading to false', () => {
      const action = imageUploading({
        loading: false,
      });

      const state = uiReducer(initialState, action);
      expect(state.loading).toBeFalse();
    });
  });

  describe('imageUploadedSuccess action', () => {
    it('should change loading to true', () => {
      const action = imageUploadedSuccess({
        loading: true,
      });

      const state = uiReducer(initialState, action);
      expect(state.loading).toBeTrue();
    });

    it('should change loading to false', () => {
      const action = imageUploadedSuccess({
        loading: false,
      });

      const state = uiReducer(initialState, action);
      expect(state.loading).toBeFalse();
    });
  });
});
