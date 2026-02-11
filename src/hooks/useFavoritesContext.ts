import { useContext } from 'react';

import { FavoritesContext } from 'src/context/FavoritesContextProvider';

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesContextProvider',
    );
  }
  return context;
};
