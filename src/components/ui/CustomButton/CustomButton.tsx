import type { ReactNode } from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import type { GradientVariant } from 'src/constants';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'default' | 'red_like';
  gradientVariant?: GradientVariant;
  onPress: () => void;
  extraStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  distance?: Insets;
}

const CustomButton = ({
  children,
  variant = 'default',
  gradientVariant,
  onPress,
  extraStyle,
  disabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
}: CustomButtonProps) => {
  const Content = gradientVariant ? (
    <CustomContainer
      variant={gradientVariant}
      extraStyle={[styles[gradientVariant], extraStyle]}
    >
      {children}
    </CustomContainer>
  ) : (
    children
  );

  return (
    <Pressable
      style={({ pressed }) => [
        styles.default,
        !gradientVariant && styles[variant],
        !gradientVariant && extraStyle,
        { opacity: pressed ? 0.7 : 1 },
      ]}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      hitSlop={distance}
    >
      {Content}
    </Pressable>
  );
};

export default CustomButton;
