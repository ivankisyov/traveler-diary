import { EntityState } from '@ngrx/entity';
import { IPlace } from '../../models/place.interface';

export interface IVisitedPlacesState extends EntityState<IPlace> {
  selectedPlaceID: string | null;
}
