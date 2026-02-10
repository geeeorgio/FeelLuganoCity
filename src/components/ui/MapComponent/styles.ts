import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(200),
    borderRadius: wp(16),
    overflow: 'hidden',
  },
  fullScreen: {
    height: '100%',
    borderRadius: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
