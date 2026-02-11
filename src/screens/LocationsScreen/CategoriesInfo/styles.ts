import { StyleSheet } from 'react-native';

import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    gap: hp(16),
    marginTop: hp(10),
  },
  title: {
    fontSize: sp(18),
  },
  categoryListContainer: {
    paddingBottom: hp(40),
  },
  categoryContentContainer: {
    gap: hp(16),
  },
});
