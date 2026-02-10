import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapIcon from '../CustomIcons/MapIcon';

import { styles } from './styles';

import { COLORS } from 'src/constants';
import darkMapStyle from 'src/constants/darkMapStyle.json';
import { hp, wp } from 'src/utils';

interface MapComponentProps {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  title?: string;
  description?: string;
  fullScreen?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
}

const MapComponent = (props: MapComponentProps) => {
  return (
    <View style={[styles.container, props.extraStyle]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={darkMapStyle}
        toolbarEnabled={false}
        initialRegion={{
          latitude: props.coordinates.latitude,
          longitude: props.coordinates.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={props.coordinates} title={props.title}>
          <MapIcon color={COLORS.red_like} width={wp(33)} height={hp(35)} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapComponent;
