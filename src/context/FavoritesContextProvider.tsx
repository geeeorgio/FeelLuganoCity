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
  FavoritesContextType,
  PlacesCategoriesKeysType,
  PlacesCategoriesType,
} from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);

export const FavoritesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const stored = await getItemFromStorage<string[]>('saved_places');
        if (stored !== null) setFavoriteIds(stored);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoaded(true);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setItemInStorage('saved_places', favoriteIds);
    }
  }, [favoriteIds, isLoaded]);

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
      contextPlaces: placesWithFavorites,
      toggleFavorite,
    }),
    [placesWithFavorites, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
