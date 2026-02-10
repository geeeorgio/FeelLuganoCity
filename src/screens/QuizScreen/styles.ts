import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backButton: {
    width: wp(30),
    height: wp(30),
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: wp(10),
    height: hp(10),
  },

  welcomeWrapper: {
    flex: 1,
    paddingTop: hp(10),
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
    paddingHorizontal: wp(16),
    marginBottom: hp(8),
  },
  welcomeHeaderText: {
    flex: 1,
    fontSize: sp(13),
    fontFamily: FONTS.Regular,
  },
  welcomeImageContainer: {
    flex: 1,
    width: '100%',
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
  },
  welcomeCard: {
    borderTopLeftRadius: wp(33),
    borderTopRightRadius: wp(33),
    paddingHorizontal: wp(50),
    paddingTop: hp(20),
    paddingBottom: hp(40),
    gap: hp(10),
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: sp(22),
    fontFamily: FONTS.Bold,
    textAlign: 'center',
  },
  welcomeDescription: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  goButton: {
    marginTop: hp(10),
    width: '60%',
  },
  goButtonContainer: {
    width: '100%',
    paddingVertical: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.border_gradient[1],
  },
  goButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.Bold,
  },
  gameWrapper: {
    flex: 1,
    paddingHorizontal: wp(16),
    paddingTop: hp(8),
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
    alignItems: 'center',
    gap: wp(6),
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: wp(12),
    paddingHorizontal: wp(10),
    paddingVertical: hp(3),
  },
  scoreDot: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
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
    minWidth: wp(14),
    textAlign: 'center',
  },
  questionFrameContainer: {
    alignItems: 'center',
    marginBottom: hp(12),
  },
  questionFrame: {
    width: wp(230),
    height: hp(150),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(30),
    paddingVertical: hp(20),
  },
  questionText: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
    color: COLORS.black,
  },
  hintButton: {
    alignSelf: 'center',
    width: '50%',
    marginBottom: hp(12),
  },
  hintButtonContainer: {
    width: '100%',
    paddingVertical: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.Bold,
  },
  hintContainer: {
    backgroundColor: COLORS.dark_overlay,
    borderRadius: wp(20),
    paddingHorizontal: wp(20),
    paddingVertical: hp(14),
    marginBottom: hp(12),
  },
  hintText: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  answersContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: hp(10),
    paddingBottom: hp(24),
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
    fontFamily: FONTS.SemiBold,
  },
  resultsWrapper: {
    flex: 1,
  },
  resultsBackRow: {
    paddingHorizontal: wp(16),
    paddingTop: hp(8),
    paddingBottom: hp(8),
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
    borderTopLeftRadius: wp(33),
    borderTopRightRadius: wp(33),
    paddingHorizontal: wp(24),
    paddingTop: hp(20),
    paddingBottom: hp(40),
    gap: hp(8),
  },
  resultsScoreTitle: {
    fontSize: sp(20),
    fontFamily: FONTS.Bold,
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
    marginTop: hp(10),
  },
  resultsButton: {
    flex: 1,
  },
  resultsButtonContainer: {
    width: '100%',
    paddingVertical: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.border_gradient[1],
  },
  resultsButtonText: {
    fontSize: sp(14),
    fontFamily: FONTS.Bold,
  },
});
