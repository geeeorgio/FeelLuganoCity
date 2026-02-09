import { useState } from 'react';
import { LayoutAnimation, Platform, UIManager, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface SwipeButtonProps {
  onSwipeComplete: () => void;
}

const SwipeButton = ({ onSwipeComplete }: SwipeButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    if (isActive) return;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setIsActive(true);

    setTimeout(() => {
      onSwipeComplete();

      setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsActive(false);
      }, 1000);
    }, 400);
  };

  return (
    <CustomButton
      gradientVariant="liquid_gradient"
      onPress={handlePress}
      extraBtnStyle={styles.container}
      extraContainerStyle={[
        styles.container,
        isActive ? styles.containerActive : styles.containerInactive,
      ]}
    >
      {!isActive && (
        <CustomText extraStyle={styles.text}>browse to look</CustomText>
      )}

      <View
        style={[styles.thumb, isActive ? styles.thumbRight : styles.thumbLeft]}
      />
    </CustomButton>
  );
};

export default SwipeButton;
