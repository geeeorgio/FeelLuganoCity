import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(33),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: wp(6),
    marginBottom: hp(10),
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
  title: {
    flex: 1,
    fontSize: sp(20),
  },
  quizTitle: {
    fontSize: sp(14),
  },
});
