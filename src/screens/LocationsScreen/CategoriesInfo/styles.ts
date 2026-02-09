import { StyleSheet } from 'react-native';

import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    gap: hp(16),
  },
  title: {
    fontSize: sp(20),
  },
  categoryListContainer: {
    paddingBottom: hp(40),
  },
  categoryContentContainer: {
    gap: hp(16),
  },
});
