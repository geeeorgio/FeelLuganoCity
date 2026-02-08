import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  CAFES_FOOD,
  LAKE_WATERFRONT,
  OLD_TOWN,
  VIEWPOINTS,
} from 'src/constants';
import type {
  GameContextType,
  PlacesCategoriesKeysType,
  PlacesCategoriesType,
} from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const GameContext = createContext<GameContextType | null>(null);

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const [storedOnboarding, storedFavorites] = await Promise.all([
          getItemFromStorage<boolean>('is_onboarding_completed'),
          getItemFromStorage<string[]>('saved_places'),
        ]);

        if (storedOnboarding !== null)
          setIsOnboardingCompleted(storedOnboarding);
        if (storedFavorites !== null) setFavoriteIds(storedFavorites);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setItemInStorage('saved_places', favoriteIds);
    }
  }, [favoriteIds, isLoading]);

  const setIsContextOnboardingDone = useCallback((val: boolean) => {
    setIsOnboardingCompleted(val);
    setItemInStorage('is_onboarding_completed', val);
  }, []);

  const toggleFavorite = useCallback((placeId: string) => {
    setFavoriteIds((prev) => {
      if (prev.includes(placeId)) {
        return prev.filter((id) => id !== placeId);
      }
      return [...prev, placeId];
    });
  }, []);

  const placesWithFavorites = useMemo(() => {
    const allCategories: PlacesCategoriesType = {
      Viewpoints: VIEWPOINTS,
      'Old Town': OLD_TOWN,
      'Lake & Waterfront': LAKE_WATERFRONT,
      'Cafés & Food': CAFES_FOOD,
    };

    const result = { ...allCategories };
    (Object.keys(result) as PlacesCategoriesKeysType[]).forEach((key) => {
      result[key] = result[key].map((place) => ({
        ...place,
        isFavorite: favoriteIds.includes(place.id),
      }));
    });

    return result;
  }, [favoriteIds]);

  const contextValue = useMemo(
    () => ({
      isLoading,
      isContextOnboardingDone: isOnboardingCompleted,
      setIsContextOnboardingDone,
      contextPlaces: placesWithFavorites,
      toggleFavorite,
    }),
    [
      isLoading,
      isOnboardingCompleted,
      placesWithFavorites,
      setIsContextOnboardingDone,
      toggleFavorite,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
