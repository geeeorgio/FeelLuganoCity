import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useOnboardingContext } from 'src/hooks/useOnboardingContext';
import { QuizScreen } from 'src/screens';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isContextOnboardingDone, isLoading } = useOnboardingContext();

  if (isLoading) {
    return null;
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      {isContextOnboardingDone ? (
        <>
          <RootStack.Screen name="MainStack" component={MainNavigator} />
          <RootStack.Screen name="QuizScreen" component={QuizScreen} />
        </>
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
