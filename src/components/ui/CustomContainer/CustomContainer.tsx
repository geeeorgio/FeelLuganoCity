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
      start={variant === 'liquid_gradient' ? { x: 0, y: 0.5 } : undefined}
      end={variant === 'liquid_gradient' ? { x: 1, y: 0.5 } : undefined}
      locations={variant === 'liquid_gradient' ? [0, 0.3, 0.7, 1] : undefined}
      style={[styles.default, styles[variant], extraStyle]}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
