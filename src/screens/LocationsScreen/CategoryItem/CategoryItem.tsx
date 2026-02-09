import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomContainer, SwipeButton } from 'src/components';
import { CustomText } from 'src/components';
import type { CategoryInfoType } from 'src/types';

interface CategoryItemProps {
  category: CategoryInfoType;
  onCategorySelect: (category: CategoryInfoType) => void;
}

const CategoryItem = ({ category, onCategorySelect }: CategoryItemProps) => {
  const handleSwipeComplete = () => {
    onCategorySelect(category);
  };

  return (
    <CustomContainer variant="liquid_gradient" extraStyle={styles.container}>
      <View style={styles.textContainer}>
        <CustomText extraStyle={styles.name}>{category.name}</CustomText>
        <CustomText extraStyle={styles.description}>
          {category.description}
        </CustomText>
      </View>

      <View style={styles.viewPlacesButton}>
        <SwipeButton onSwipeComplete={handleSwipeComplete} />
      </View>
    </CustomContainer>
  );
};

export default CategoryItem;
