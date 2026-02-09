import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import { COLORS, TAB_BAR_ICONS } from 'src/constants';
import type { RootStackNavigationProp } from 'src/types';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const rootNavigation = useNavigation<RootStackNavigationProp>();

  return (
    <CustomContainer variant="main_gradient" extraStyle={styles.container}>
      {TAB_BAR_ICONS.map((tab) => {
        const route = state.routes.find((r) => r.name === tab.name);

        const isFocused = route
          ? state.index === state.routes.indexOf(route)
          : false;

        const Icon = tab.icon;

        const onPress = () => {
          if (tab.isExternal) {
            rootNavigation.navigate('QuizScreen');
          } else if (route) {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(tab.name);
            }
          }
        };

        const onLongPress = () => {
          if (!tab.isExternal && route) {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          }
        };

        const accessibilityLabel =
          route && descriptors[route.key]
            ? descriptors[route.key].options.tabBarAccessibilityLabel
            : tab.name;

        return (
          <PlatformPressable
            key={tab.name}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.button, isFocused && styles.buttonFocused]}
          >
            <Icon color={COLORS.white} style={styles.icon} />
          </PlatformPressable>
        );
      })}
    </CustomContainer>
  );
};

export default CustomTabBar;
