import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(14),
    borderRadius: wp(30),
    backgroundColor: COLORS.dark_overlay,
    borderTopColor: COLORS.main_gradient[0],
    borderColor: COLORS.liquid_border,
    borderBottomWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 0.67,
    marginRight: wp(10),
    gap: hp(4),
  },
  name: {
    fontSize: sp(16),
  },
  description: {
    fontSize: sp(12),
    fontFamily: FONTS.Regular,
  },
  viewPlacesButton: {
    flex: 0.33,
    justifyContent: 'flex-start',
  },
});
