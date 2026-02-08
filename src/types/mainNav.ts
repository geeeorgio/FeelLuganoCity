import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  HomeScreen: undefined;
  LocationsScreen: undefined;
  MapScreen: undefined;
  SavedScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
