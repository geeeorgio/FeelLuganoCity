import { useState } from 'react';
import { View } from 'react-native';

import CategoriesInfo from './CategoriesInfo/CategoriesInfo';
import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  SelectedCategoryList,
} from 'src/components';
import type { CategoryInfoType, PlaceType } from 'src/types';

const LocationsScreen = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryInfoType | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<PlaceType | null>(null);

  const handleCategorySelect = (category: CategoryInfoType) => {
    setSelectedCategory(category);
  };

  const handleBackPress = () => {
    setSelectedCategory(null);
  };

  const handleItemPress = (item: PlaceType) => {
    setSelectedPlace(item);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {selectedCategory ? (
        <View style={styles.selectedCategoryContainer}>
          <CustomHeader
            title={selectedCategory.name}
            onBackPress={handleBackPress}
          />
          <SelectedCategoryList
            places={selectedCategory.places}
            onItemPress={handleItemPress}
          />
        </View>
      ) : (
        <CategoriesInfo onCategorySelect={handleCategorySelect} />
      )}
    </CustomScreenWrapper>
  );
};

export default LocationsScreen;
