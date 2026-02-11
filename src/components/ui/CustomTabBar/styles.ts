import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    gap: wp(10),
    bottom: hp(66),
    zIndex: 1000,
    paddingVertical: hp(10),
    paddingHorizontal: wp(10),
    borderRadius: wp(30),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(12),
    borderRadius: wp(25),
    borderWidth: wp(1),
    borderColor: COLORS.yellow_gradient[0],
    backgroundColor: COLORS.btn_light_overlay,
  },
  buttonFocused: {
    backgroundColor: COLORS.btn_dark_overlay,
  },
  icon: {
    width: wp(26),
    height: wp(26),
  },
});
