import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  welcomeWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  welcomeHeader: {
    width: '100%',
    paddingHorizontal: wp(16),
  },
  contentWrapper: {
    width: '100%',
  },
  welcomeImageContainer: {
    alignSelf: 'center',
    width: '100%',
    height: hp(355),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
  },
  welcomeCard: {
    borderTopLeftRadius: wp(33),
    borderTopRightRadius: wp(33),
    paddingHorizontal: wp(33),
    paddingTop: hp(20),
    paddingBottom: hp(66),
    gap: hp(10),
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: sp(20),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  welcomeDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  goButton: {
    marginTop: hp(20),
    width: '60%',
  },
  goButtonContainer: {
    width: '100%',
    paddingVertical: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.border_gradient[1],
  },
  goButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.Bold,
  },
});
