import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface SwipeButtonProps {
  onSwipeComplete: () => void;
}

const SwipeButton = ({ onSwipeComplete }: SwipeButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const completeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handlePress = () => {
    if (isActive) return;

    setIsActive(true);

    completeTimerRef.current = setTimeout(() => {
      onSwipeComplete();

      resetTimerRef.current = setTimeout(() => {
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
