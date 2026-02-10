import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MapIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 22 27" {...props}>
      <Path
        stroke={props.color || props.stroke || COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M11.683 25.688a1.244 1.244 0 0 1-1.493 0c-6.437-4.78-13.272-14.614-6.366-21.72a9.91 9.91 0 0 1 7.113-3.03c2.667 0 5.225 1.09 7.11 3.03 6.908 7.105.075 16.937-6.364 21.72"
      ></Path>
      <Path
        stroke={props.stroke || props.color || COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M10.937 13.438a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      ></Path>
    </Svg>
  );
};

export default MapIcon;
