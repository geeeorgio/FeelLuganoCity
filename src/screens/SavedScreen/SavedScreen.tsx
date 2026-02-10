import { useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  SelectedCategoryList,
  SelectedItemDetails,
} from 'src/components';
import { useGameContext } from 'src/hooks/useGameContext';
import type { PlaceType } from 'src/types';

const SavedScreen = () => {
  const { contextPlaces } = useGameContext();

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const handleItemPress = (item: PlaceType) => {
    setSelectedPlaceId(item.id);
  };

  const handlePlaceBackPress = () => {
    setSelectedPlaceId(null);
  };

  const savedPlaces = Object.values(contextPlaces)
    .flatMap((category) => category)
    .filter((place) => place.isFavorite);

  const selectedPlace = selectedPlaceId
    ? savedPlaces.find((place) => place.id === selectedPlaceId)
    : null;

  const showSelectedList = savedPlaces.length > 0 && !selectedPlace;

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {showSelectedList && (
        <View style={styles.selectedCategoryContainer}>
          <SelectedCategoryList
            places={savedPlaces}
            onItemPress={handleItemPress}
          />
        </View>
      )}

      {savedPlaces.length === 0 && (
        <View style={styles.noSavedPlacesContainer}>
          <CustomText extraStyle={styles.noSavedPlacesText}>
            No saved places yet
          </CustomText>
        </View>
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

export default SavedScreen;
