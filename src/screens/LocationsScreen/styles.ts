import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
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
