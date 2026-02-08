import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const QuizIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 27 27" {...props}>
      <Path
        stroke={props.color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M7.189 15.937a3.75 3.75 0 1 0 1.25 7.288"
      ></Path>
      <Path
        stroke={props.color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M3.769 17.943a5 5 0 0 1-1.093-8.295m.038-.101a3.125 3.125 0 0 1 4.475-4.235m.297.081a3.125 3.125 0 1 1 5.953-1.331m0 0v19.375m0-19.375a3.125 3.125 0 1 1 5.952 1.331M13.44 23.437a2.5 2.5 0 0 1-5 0m5 0a2.5 2.5 0 0 0 2.5 2.5m-2.5-18.75a3.75 3.75 0 0 0 3.75 3.75M24.2 9.648a4.99 4.99 0 0 1 1.738 3.789c0 .879-.227 1.705-.625 2.423m-1.15-6.313a3.125 3.125 0 0 0-4.475-4.235m4.375 18.75 1.875 1.875m-7.5-4.375a3.125 3.125 0 1 0 6.25 0 3.125 3.125 0 0 0-6.25 0"
      ></Path>
    </Svg>
  );
};

export default QuizIcon;
