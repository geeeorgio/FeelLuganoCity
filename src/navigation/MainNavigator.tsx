import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  LocationsScreen,
  MapScreen,
  SavedScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createBottomTabNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      // tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="HomeScreen"
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="LocationsScreen" component={LocationsScreen} />
      <MainStack.Screen name="MapScreen" component={MapScreen} />
      <MainStack.Screen name="SavedScreen" component={SavedScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
