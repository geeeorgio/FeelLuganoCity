import { useCallback, useMemo, useRef, useState } from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  MapComponent,
  SelectedItemDetails,
  SelectedListItem,
} from 'src/components';
import { MAIN_BACKGROUND } from 'src/constants';
import { useFavoritesContext } from 'src/hooks/useFavoritesContext';

const MapScreen = () => {
  const { contextPlaces } = useFavoritesContext();
  const [showSelectedPlace, setShowSelectedPlace] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [showDetailsInfo, setShowDetailsInfo] = useState(false);

  const itemPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const allLocations = useMemo(() => {
    return Object.values(contextPlaces).flatMap((category) => category);
  }, [contextPlaces]);

  const selectedPlace = useMemo(() => {
    return allLocations.find((place) => place.id === selectedPlaceId) || null;
  }, [selectedPlaceId, allLocations]);

  const handleMarkerPress = useCallback((id: string) => {
    setSelectedPlaceId(id);
    setShowSelectedPlace(true);
  }, []);

  const handleMapPress = useCallback(() => {
    setShowSelectedPlace(false);
  }, []);

  const handleItemPress = useCallback(() => {
    if (itemPressTimerRef.current) clearTimeout(itemPressTimerRef.current);
    itemPressTimerRef.current = setTimeout(() => {
      setShowDetailsInfo(true);
    }, 100);
  }, []);

  const handleDetailsBackPress = useCallback(() => {
    setShowDetailsInfo(false);
  }, []);

  return (
    <CustomScreenWrapper
      extraStyle={styles.container}
      insets={['left', 'right']}
    >
      <MapComponent
        allPlaces={allLocations}
        fullScreen
        onDetailPress={handleMarkerPress}
        onMapPress={handleMapPress}
      />

      {showSelectedPlace && selectedPlace && (
        <View style={styles.selectedPlaceContainer}>
          <SelectedListItem
            item={selectedPlace}
            onItemPress={handleItemPress}
          />
        </View>
      )}

      {showDetailsInfo && selectedPlace && (
        <View style={styles.detailsInfoContainer}>
          <ImageBackground
            source={MAIN_BACKGROUND}
            resizeMode="cover"
            style={styles.detailsInfoBackground}
            blurRadius={10}
          >
            <CustomHeader
              title={selectedPlace.title}
              onBackPress={handleDetailsBackPress}
            />
            <SelectedItemDetails item={selectedPlace} disableMapButton />
          </ImageBackground>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default MapScreen;
