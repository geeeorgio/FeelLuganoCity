import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
    paddingTop: hp(20),
  },
  textContainer: {
    width: '100%',
    padding: wp(12),
    borderRadius: wp(30),
  },
  descriptionContainer: {
    width: '100%',
    gap: hp(10),
  },
  title: {
    fontSize: sp(20),
  },
  description: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
  },
  readMoreText: {
    fontSize: sp(14),
    fontFamily: FONTS.Bold,
  },
});
