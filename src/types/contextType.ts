import type { PlacesCategoriesType } from './gameplay';

export type GameContextType = {
  isLoading: boolean;
  //
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => void;
  //
  contextPlaces: PlacesCategoriesType;
  toggleFavorite: (placeId: string) => void;
};
