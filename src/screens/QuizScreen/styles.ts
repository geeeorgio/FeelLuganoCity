import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  gameWrapper: {
    flex: 1,
    paddingHorizontal: wp(16),
    backgroundColor: COLORS.no_saved_container,
  },
  backButton: {
    width: wp(30),
    height: hp(30),
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: wp(15),
    height: hp(15),
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: hp(16),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(10),
  },
  headerRight: {
    alignItems: 'flex-end',
    gap: hp(4),
  },
  questionCounter: {
    fontSize: sp(16),
    fontFamily: FONTS.SemiBold,
  },
  timerText: {
    fontSize: sp(16),
    fontFamily: FONTS.Bold,
  },
  scoreIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: wp(6),
    backgroundColor: COLORS.liquid_overlay,
    borderWidth: wp(1),
    borderColor: COLORS.yellow_gradient[0],
    width: wp(45),
    borderRadius: wp(12),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  scoreDot: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(8),
  },
  greenDot: {
    backgroundColor: COLORS.green,
  },
  redDot: {
    backgroundColor: COLORS.red,
  },
  scoreValue: {
    fontSize: sp(13),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  questionFrameContainer: {
    alignItems: 'center',
    gap: hp(4),
  },
  questionFrame: {
    width: wp(220),
    height: hp(150),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(30),
    paddingVertical: hp(20),
  },
  questionText: {
    fontSize: sp(14),
    textAlign: 'center',
    color: COLORS.facts_text,
  },
  hintSlot: {
    height: hp(90),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  hintButton: {
    justifyContent: 'center',
    width: wp(220),
  },
  hintButtonContainer: {
    width: '100%',
    paddingHorizontal: wp(10),
    paddingVertical: hp(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.btn_light_overlay,
    borderRadius: wp(25),
  },
  hintButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.Bold,
  },
  hintContainer: {
    width: wp(220),
    justifyContent: 'center',
    backgroundColor: COLORS.btn_light_overlay,
    borderWidth: wp(1),
    borderColor: COLORS.yellow_gradient[0],
    borderRadius: wp(25),
    paddingHorizontal: wp(20),
    paddingVertical: hp(16),
  },
  hintText: {
    fontSize: sp(14),
    textAlign: 'center',
    fontFamily: FONTS.Bold,
  },
  scrollContent: {
    flexGrow: 1,
  },
  answersContainer: {
    width: '100%',
    gap: hp(10),
    paddingBottom: hp(80),
  },
  answerButton: {
    width: '100%',
  },
  answerButtonContainer: {
    width: '100%',
    paddingVertical: hp(16),
    paddingHorizontal: wp(20),
    alignItems: 'flex-start',
  },
  answerText: {
    fontSize: sp(15),
  },
});
