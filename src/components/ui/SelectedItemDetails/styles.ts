import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    gap: hp(10),
  },
  cardContainer: {
    width: '100%',
    borderRadius: wp(30),
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: hp(150),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    width: '100%',
    gap: hp(8),
    paddingTop: hp(6),
    paddingHorizontal: wp(12),
    paddingBottom: hp(12),
    backgroundColor: COLORS.card_bckg,
  },
  description: {
    fontSize: sp(14),
  },
  cordsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  adress: {
    fontSize: sp(12),
    fontFamily: FONTS.Regular,
  },
  actionBtnsContainer: {
    marginTop: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(10),
  },
  openBtn: {
    flex: 0.45,
  },
  openBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.btn_light_overlay,
    borderColor: COLORS.main_gradient[1],
    paddingVertical: hp(10),
  },
  actionBtnText: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
  },
  twoBtnsContainer: {
    flex: 0.35,
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  smallBtn: {
    flex: 1,
  },
  smallBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.btn_light_overlay,
    borderColor: COLORS.main_gradient[1],
    paddingVertical: hp(10),
  },
  likeBtnActive: {
    backgroundColor: COLORS.red_like,
  },
  icon: {
    width: wp(18),
    height: hp(18),
  },
  factsBtn: {
    width: '100%',
    marginBottom: hp(10),
  },
  factsBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.btn_light_overlay,
    paddingVertical: hp(10),
  },
  factsBtnText: {
    fontSize: sp(14),
    fontFamily: FONTS.Bold,
  },
  noteFrameContainer: {
    alignSelf: 'center',
    width: '66%',
    height: hp(120),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  noteFrame: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  factsTextContainer: {
    width: '100%',
    paddingHorizontal: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  factsText: {
    fontSize: sp(12),
    color: COLORS.facts_text,
    textAlign: 'center',
  },
  mapContainer: {
    width: '100%',
    height: hp(200),
    borderRadius: wp(30),
    overflow: 'hidden',
  },
});
