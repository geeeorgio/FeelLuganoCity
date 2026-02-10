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
import { useGameContext } from 'src/hooks/useGameContext';
import type {
  CategoryInfoType,
  PlacesCategoriesKeysType,
  PlaceType,
} from 'src/types';

const LocationsScreen = () => {
  const { contextPlaces } = useGameContext();

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryInfoType | null>(null);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const selectedContextPlaces = selectedCategory
    ? contextPlaces[selectedCategory.name as PlacesCategoriesKeysType]
    : [];

  const handleCategorySelect = (category: CategoryInfoType) => {
    setSelectedCategory(category);
  };

  const handleCategoryBackPress = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const handleItemPress = (item: PlaceType) => {
    setSelectedPlaceId(item.id);
  };

  const handlePlaceBackPress = () => {
    setSelectedPlaceId(null);
  };

  const selectedPlace = !selectedPlaceId
    ? null
    : selectedContextPlaces.find((p) => p.id === selectedPlaceId) || null;

  const showCategoriesInfo = !selectedCategory && !selectedPlace;
  const showSelectedList = selectedCategory && !selectedPlace;

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
            places={selectedContextPlaces}
            onItemPress={handleItemPress}
          />
        </View>
      )}

      {showCategoriesInfo && (
        <CategoriesInfo onCategorySelect={handleCategorySelect} />
      )}

      {selectedPlace && (
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
