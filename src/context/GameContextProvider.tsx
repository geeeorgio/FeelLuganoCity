import type { ReactNode } from 'react';

import { FavoritesContextProvider } from './FavoritesContextProvider';
import { OnboardingContextProvider } from './OnboardingContextProvider';

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <OnboardingContextProvider>
      <FavoritesContextProvider>{children}</FavoritesContextProvider>
    </OnboardingContextProvider>
  );
};
