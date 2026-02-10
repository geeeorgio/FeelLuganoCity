import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: hp(20),
  },
  imgContainer: {
    width: '100%',
    height: hp(525),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    borderTopLeftRadius: wp(33),
    borderTopRightRadius: wp(33),
    paddingHorizontal: wp(70),
    paddingTop: hp(20),
    gap: hp(10),
    alignItems: 'center',
    paddingBottom: hp(66),
  },
  title: {
    fontSize: sp(20),
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  btn: {
    marginTop: hp(10),
    width: '85%',
  },
  btnContainer: {
    width: '100%',
    paddingVertical: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.border_gradient[1],
  },
  btnText: {
    fontSize: sp(18),
    fontFamily: FONTS.Bold,
  },
});
