import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
  },
  selectedCategoryContainer: {
    width: '100%',
    paddingTop: hp(24),
  },
  selectedPlaceContainer: {
    width: '100%',
  },
  noSavedPlacesContainer: {
    marginTop: hp(300),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.no_saved_container,
    borderRadius: wp(30),
    paddingVertical: wp(16),
    paddingHorizontal: wp(30),
  },
  noSavedPlacesText: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
  },
});
