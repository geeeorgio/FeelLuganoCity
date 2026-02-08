import type { ReactNode } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import type { Edges } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface CustomScreenWrapperProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
  insets?: Edges;
}

const CustomScreenWrapper = ({
  children,
  extraStyle,
  insets = ['top', 'left', 'right'],
}: CustomScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.container, extraStyle]} edges={insets}>
      {children}
    </SafeAreaView>
  );
};

export default CustomScreenWrapper;
