import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  selectedPlaceContainer: {
    alignSelf: 'center',
    width: '90%',
    position: 'absolute',
    top: hp(120),
    zIndex: 1000,
  },
  detailsInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  detailsInfoBackground: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: wp(16),
    paddingTop: hp(40),
  },
});
