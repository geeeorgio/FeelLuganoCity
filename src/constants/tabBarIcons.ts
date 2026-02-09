import type { SvgProps } from 'react-native-svg';

import InfoIcon from 'src/components/ui/CustomIcons/InfoIcon';
import LocationIcon from 'src/components/ui/CustomIcons/LocationIcon';
import MapIcon from 'src/components/ui/CustomIcons/MapIcon';
import QuizIcon from 'src/components/ui/CustomIcons/QuizIcon';
import SavedIcon from 'src/components/ui/CustomIcons/SavedIcon';

export type IconComponent = React.ComponentType<SvgProps>;

export const TabBarIconsNames = [
  'HomeScreen',
  'LocationsScreen',
  'MapScreen',
  'SavedScreen',
  'QuizScreen',
] as const;

export type TabBarIconNameType = (typeof TabBarIconsNames)[number];

export type TabBarIconProps = {
  name: TabBarIconNameType;
  icon: IconComponent;
  isExternal: boolean;
};

export const TAB_BAR_ICONS: TabBarIconProps[] = [
  {
    name: 'HomeScreen',
    icon: InfoIcon,
    isExternal: false,
  },
  {
    name: 'LocationsScreen',
    icon: LocationIcon,
    isExternal: false,
  },
  {
    name: 'MapScreen',
    icon: MapIcon,
    isExternal: false,
  },
  {
    name: 'QuizScreen',
    icon: QuizIcon,
    isExternal: true,
  },
  {
    name: 'SavedScreen',
    icon: SavedIcon,
    isExternal: false,
  },
];
