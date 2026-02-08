import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  red_like: {
    backgroundColor: COLORS.red_like,
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
    borderRadius: wp(25),
  },
  main_gradient: {
    borderWidth: wp(1),
    borderColor: COLORS.main_gradient[1],
    borderRadius: wp(25),
  },
  green_gradient: {
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
    borderRadius: wp(30),
  },
  red_gradient: {
    borderWidth: wp(1),
    borderColor: COLORS.main_border,
    borderRadius: wp(30),
  },
  liquid_gradient: {
    borderWidth: wp(1),
    borderColor: COLORS.yellow_gradient[0],
    borderRadius: wp(25),
  },
  yellow_gradient: {},
  border_gradient: {},
});
