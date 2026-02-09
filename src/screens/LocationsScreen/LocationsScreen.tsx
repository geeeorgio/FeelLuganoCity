import { useState } from 'react';
import { View } from 'react-native';

import CategoriesInfo from './CategoriesInfo/CategoriesInfo';
import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  SelectedCategoryList,
  SelectedItemDetails,
} from 'src/components';
import type { CategoryInfoType, PlaceType } from 'src/types';

const LocationsScreen = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryInfoType | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<PlaceType | null>(null);

  const showCategoriesInfo = !selectedCategory && !selectedPlace;
  const showSelectedList = selectedCategory && !selectedPlace;
  const showSelectedPlace = selectedPlace;

  const handleCategorySelect = (category: CategoryInfoType) => {
    setSelectedCategory(category);
  };

  const handleCategoryBackPress = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const handlePlaceBackPress = () => {
    if (selectedPlace) {
      setSelectedPlace(null);
    }
  };

  const handleItemPress = (item: PlaceType) => {
    setSelectedPlace(item);
  };

  return (
    <CustomScreenWrapper
      extraStyle={[
        styles.container,
        selectedPlace && styles.selectedPlaceWrapper,
      ]}
    >
      {showSelectedList && (
        <View style={styles.selectedCategoryContainer}>
          <CustomHeader
            title={selectedCategory.name}
            onBackPress={handleCategoryBackPress}
          />
          <SelectedCategoryList
            places={selectedCategory.places}
            onItemPress={handleItemPress}
          />
        </View>
      )}

      {showCategoriesInfo && (
        <CategoriesInfo onCategorySelect={handleCategorySelect} />
      )}

      {showSelectedPlace && (
        <View style={styles.selectedPlaceContainer}>
          <CustomHeader
            title={selectedPlace.title}
            onBackPress={handlePlaceBackPress}
          />
          <SelectedItemDetails item={selectedPlace} />
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default LocationsScreen;
