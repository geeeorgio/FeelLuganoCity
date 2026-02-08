import type { ReactNode } from 'react';
import type { StyleProp, TextProps, TextStyle } from 'react-native';
import { Text } from 'react-native';

import { styles } from './styles';

interface CustomTextProps extends TextProps {
  children: ReactNode;
  extraStyle?: StyleProp<TextStyle>;
}

const CustomText = ({ children, extraStyle, ...props }: CustomTextProps) => {
  return (
    <Text style={[styles.default, extraStyle]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
