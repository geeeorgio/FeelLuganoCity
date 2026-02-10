import { useMemo, useState } from 'react';
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
import { useGameContext } from 'src/hooks/useGameContext';

const MapScreen = () => {
  const { contextPlaces } = useGameContext();
  const [showSelectedPlace, setShowSelectedPlace] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [showDetailsInfo, setShowDetailsInfo] = useState(false);

  const allLocations = useMemo(() => {
    return Object.values(contextPlaces).flatMap((category) => category);
  }, [contextPlaces]);

  const selectedPlace = useMemo(() => {
    return allLocations.find((place) => place.id === selectedPlaceId) || null;
  }, [selectedPlaceId, allLocations]);

  const handleMarkerPress = (id: string) => {
    setSelectedPlaceId(id);
    setShowSelectedPlace(true);
  };

  const handleItemPress = () => {
    setTimeout(() => {
      setShowDetailsInfo(true);
    }, 100);
  };

  const handleDetailsBackPress = () => {
    setShowDetailsInfo(false);
  };

  return (
    <CustomScreenWrapper
      extraStyle={styles.container}
      insets={['left', 'right']}
    >
      <MapComponent
        allPlaces={allLocations}
        fullScreen
        onDetailPress={handleMarkerPress}
        onMapPress={() => setShowSelectedPlace(false)}
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
            <SelectedItemDetails item={selectedPlace} />
          </ImageBackground>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default MapScreen;
