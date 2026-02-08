import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const LikeIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 19 17" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M2.24 8.25a4.2 4.2 0 0 1-1.24-3 4.25 4.25 0 0 1 7.94-2.11h1.12A4.24 4.24 0 0 1 13.75 1 4.25 4.25 0 0 1 18 5.25c0 1.17-.5 2.25-1.24 3L9.5 15.5zm15.22.71A5.247 5.247 0 0 0 13.75 0C12 0 10.45.85 9.5 2.17A5.22 5.22 0 0 0 5.25 0 5.25 5.25 0 0 0 0 5.25C0 6.7.59 8 1.54 8.96l7.96 7.96z"
      ></Path>
    </Svg>
  );
};

export default LikeIcon;
