import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { OnboardingContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const OnboardingContext = createContext<OnboardingContextType | null>(
  null,
);

export const OnboardingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const stored = await getItemFromStorage<boolean>(
          'is_onboarding_completed',
        );
        if (stored !== null) setIsOnboardingCompleted(stored);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  const setIsContextOnboardingDone = useCallback((val: boolean) => {
    setIsOnboardingCompleted(val);
    setItemInStorage('is_onboarding_completed', val);
  }, []);

  const contextValue = useMemo(
    () => ({
      isLoading,
      isContextOnboardingDone: isOnboardingCompleted,
      setIsContextOnboardingDone,
    }),
    [isLoading, isOnboardingCompleted, setIsContextOnboardingDone],
  );

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
