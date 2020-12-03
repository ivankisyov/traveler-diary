export interface IPlace {
  id: string;
  name: {
    en: string;
    bg: string;
  };
  description: {
    en: string;
    bg: string;
  };
  visited: boolean;
}
