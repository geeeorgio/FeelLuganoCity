import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  resultsWrapper: {
    flex: 1,
  },
  resultsHeader: {
    width: '100%',
    paddingHorizontal: wp(16),
  },
  resultsImageContainer: {
    flex: 1,
    width: '100%',
  },
  resultsImage: {
    width: '100%',
    height: '100%',
  },
  resultsCard: {
    borderTopLeftRadius: wp(30),
    borderTopRightRadius: wp(30),
    paddingHorizontal: wp(16),
    paddingTop: hp(20),
    paddingBottom: hp(88),
  },
  resultsScoreTitle: {
    fontSize: sp(18),
    marginBottom: hp(4),
  },
  resultsDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
  },
  resultsAdvice: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
  },
  resultsButtonsRow: {
    flexDirection: 'row',
    gap: wp(16),
    marginTop: hp(20),
  },
  resultsButton: {
    flex: 1,
  },
  resultsButtonContainer: {
    width: '100%',
    paddingVertical: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.btn_light_overlay,
  },
  resultsButtonText: {
    fontSize: sp(12),
    fontFamily: FONTS.Bold,
  },
});
