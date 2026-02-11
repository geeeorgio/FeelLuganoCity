import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInactive: {
    justifyContent: 'flex-start',
  },
  containerActive: {
    backgroundColor: COLORS.green,
    justifyContent: 'flex-end',
  },
  thumb: {
    width: wp(18),
    height: wp(15),
    borderRadius: wp(9),
    backgroundColor: COLORS.white,
  },
  text: {
    position: 'absolute',
    right: wp(12),
    fontSize: sp(8),
    fontFamily: FONTS.Regular,
  },
  thumbLeft: {
    left: wp(2),
  },
  thumbRight: {
    right: wp(2),
  },
});
