import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 19" {...props}>
      <Path
        stroke={props.color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.143"
        d="M13.143 5.143 8.597.572 4 5.143M8.597.596v13.69M5.143 8.572H2.857a2.286 2.286 0 0 0-2.285 2.285v4.572a2.286 2.286 0 0 0 2.285 2.285h11.429a2.286 2.286 0 0 0 2.286-2.285v-4.572a2.286 2.286 0 0 0-2.286-2.285H12"
      ></Path>
    </Svg>
  );
};

export default ShareIcon;
