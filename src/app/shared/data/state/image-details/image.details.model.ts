export type Language = 'en' | 'bg';
import { IImageDetail } from './../../models';

export interface IImageDetailsState {
  items: Array<IImageDetail>;
}
