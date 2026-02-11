import type { PlacesCategoriesType } from './gameplay';

export type OnboardingContextType = {
  isLoading: boolean;
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => void;
};

export type FavoritesContextType = {
  contextPlaces: PlacesCategoriesType;
  toggleFavorite: (placeId: string) => void;
};
