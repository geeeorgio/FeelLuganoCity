import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
    paddingTop: hp(10),
  },
  selectedPlaceWrapper: {
    backgroundColor: COLORS.dark_overlay,
  },
  selectedCategoryContainer: {
    width: '100%',
  },
  selectedPlaceContainer: {
    width: '100%',
  },
});
