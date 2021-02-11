import { selectLanguage, selectLoading } from './ui.selectors';

describe('UI Selectors', () => {
  it('should select loading', () => {
    const result = selectLoading.projector({
      language: 'bg',
      loading: false,
    });

    expect(result).toBeFalse();
  });

  it('should select language', () => {
    const language = 'bg';
    const result = selectLanguage.projector({
      language,
      loading: false,
    });

    expect(result).toBe(language);
  });
});
