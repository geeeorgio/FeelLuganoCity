import { useContext } from 'react';

import { OnboardingContext } from 'src/context/OnboardingContextProvider';

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      'useOnboardingContext must be used within an OnboardingContextProvider',
    );
  }
  return context;
};
