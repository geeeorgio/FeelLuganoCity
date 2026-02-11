import React from 'react';
import { ImageBackground, View } from 'react-native';

import CustomText from '../CustomText/CustomText';
import SwipeButton from '../SwipeButton/SwipeButton';

import { styles } from './styles';

import type { PlaceType } from 'src/types';

interface SelectedListItemProps {
  item: PlaceType;
  onItemPress: ((item: PlaceType) => void) | (() => void);
}

const SelectedListItem = React.memo(
  ({ item, onItemPress }: SelectedListItemProps) => {
    const handleSwipeComplete = () => {
      onItemPress(item);
    };

    return (
      <ImageBackground
        source={item.image}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <CustomText extraStyle={styles.title}>{item.title}</CustomText>
          </View>
          <View style={styles.swipeButton}>
            <SwipeButton onSwipeComplete={handleSwipeComplete} />
          </View>
        </View>
      </ImageBackground>
    );
  },
);

export default SelectedListItem;
