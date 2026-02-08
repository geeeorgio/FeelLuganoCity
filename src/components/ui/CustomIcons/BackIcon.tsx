import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const BackIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 8 16" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M6.917.188.184 7.462A.7.7 0 0 0 0 7.94c0 .178.066.35.184.477l6.733 7.277a.6.6 0 0 0 .424.188.57.57 0 0 0 .423-.188.67.67 0 0 0 .177-.457.67.67 0 0 0-.177-.457L1.433 7.94 7.764 1.1a.67.67 0 0 0 .177-.455.67.67 0 0 0-.177-.457A.6.6 0 0 0 7.341 0a.56.56 0 0 0-.424.188"
      ></Path>
    </Svg>
  );
};

export default BackIcon;
