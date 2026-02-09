import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    borderTopWidth: wp(1),
    borderBottomWidth: wp(1),
    borderLeftWidth: wp(1),
    borderRightWidth: wp(1),
  },
  main_gradient: {
    borderTopColor: COLORS.main_gradient[0],
    borderBottomColor: COLORS.main_gradient[0],
    borderLeftColor: COLORS.main_gradient[0],
    borderRightColor: COLORS.main_gradient[1],
  },
  green_gradient: {
    borderTopColor: COLORS.main_gradient[0],
    borderBottomColor: COLORS.main_gradient[0],
    borderLeftColor: COLORS.main_gradient[0],
    borderRightColor: COLORS.main_gradient[1],
  },
  red_gradient: {
    borderTopColor: COLORS.red_gradient[0],
    borderBottomColor: COLORS.red_gradient[0],
    borderLeftColor: COLORS.red_gradient[0],
    borderRightColor: COLORS.red_gradient[1],
  },
  liquid_gradient: {},
  yellow_gradient: {},
  border_gradient: {},
});
