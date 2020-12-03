import { IImageDetailsState } from './image-details/image.details.model';
import { IUIState } from './ui/ui.model';
import { IVisitedPlacesState } from './visited-places/visited.places.model';

export interface AppState {
  visitedPlaces: IVisitedPlacesState;
  ui: IUIState;
  imageDetails: IImageDetailsState;
}
