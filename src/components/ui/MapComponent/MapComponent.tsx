import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapIcon from '../CustomIcons/MapIcon';

import { styles } from './styles';

import { COLORS, LUGANO_REGION, SINGLE_PLACE_DELTAS } from 'src/constants';
import darkMapStyle from 'src/constants/darkMapStyle.json';
import type { PlaceType } from 'src/types';
import { hp, wp } from 'src/utils';

interface MapComponentProps {
  allPlaces?: PlaceType[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  onDetailPress?: (placeId: string) => void;
  onMapPress?: () => void;
  title?: string;
  description?: string;
  fullScreen?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
}

const MapComponent = React.memo(
  ({
    allPlaces,
    coordinates,
    fullScreen,
    extraStyle,
    onDetailPress,
    onMapPress,
  }: MapComponentProps) => {
    return (
      <View
        style={[styles.container, fullScreen && styles.fullScreen, extraStyle]}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={darkMapStyle}
          toolbarEnabled={false}
          onPress={(e) => {
            if (e.nativeEvent.action !== 'marker-press') {
              onMapPress?.();
            }
          }}
          initialRegion={{
            latitude: coordinates?.latitude || LUGANO_REGION.latitude,
            longitude: coordinates?.longitude || LUGANO_REGION.longitude,
            ...(allPlaces ? LUGANO_REGION : SINGLE_PLACE_DELTAS),
          }}
        >
          {!allPlaces && coordinates && (
            <Marker coordinate={coordinates}>
              <MapIcon
                stroke={COLORS.black}
                fill={COLORS.red_like}
                width={wp(30)}
                height={hp(35)}
              />
            </Marker>
          )}

          {allPlaces &&
            allPlaces.length > 0 &&
            allPlaces.map((place) => (
              <Marker
                key={place.id}
                coordinate={place.coordinates}
                onPress={() => onDetailPress?.(place.id)}
              >
                <MapIcon
                  stroke={COLORS.black}
                  fill={COLORS.red_like}
                  width={wp(30)}
                  height={hp(35)}
                />
              </Marker>
            ))}
        </MapView>
      </View>
    );
  },
);

export default MapComponent;
