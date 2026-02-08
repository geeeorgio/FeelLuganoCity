import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen_1,
  OnboardingScreen_2,
  OnboardingScreen_3,
  OnboardingScreen_4,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const OnbdgStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnbdgStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <OnbdgStack.Screen
        name="OnboardingScreen_1"
        component={OnboardingScreen_1}
      />
      <OnbdgStack.Screen
        name="OnboardingScreen_2"
        component={OnboardingScreen_2}
      />
      <OnbdgStack.Screen
        name="OnboardingScreen_3"
        component={OnboardingScreen_3}
      />
      <OnbdgStack.Screen
        name="OnboardingScreen_4"
        component={OnboardingScreen_4}
      />
    </OnbdgStack.Navigator>
  );
};

export default OnboardingNavigator;
