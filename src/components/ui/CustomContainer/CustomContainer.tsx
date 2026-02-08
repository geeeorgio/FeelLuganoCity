import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import type { GradientVariant } from 'src/constants';
import { GRADIENT_MAP } from 'src/constants';

interface CustomContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
  variant: GradientVariant;
}

const CustomContainer = ({
  children,
  extraStyle,
  variant = 'main_gradient',
}: CustomContainerProps) => {
  return (
    <LinearGradient
      colors={GRADIENT_MAP[variant]}
      style={[styles.default, extraStyle]}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
