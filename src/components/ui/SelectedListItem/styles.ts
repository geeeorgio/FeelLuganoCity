import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(170),
    borderRadius: wp(30),
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(14),
    gap: wp(10),
    backgroundColor: COLORS.dark_overlay,
  },
  titleContainer: {
    flex: 0.65,
  },
  title: {
    fontSize: sp(16),
  },
  swipeButton: {
    flex: 0.35,
  },
});
