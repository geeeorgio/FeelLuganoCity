import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const InfoIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 28 28" {...props}>
      <Path
        stroke={props.color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M13.75 26.875c7.249 0 13.125-5.876 13.125-13.125S20.999.625 13.75.625.625 6.501.625 13.75 6.501 26.875 13.75 26.875"
      ></Path>
      <Path
        stroke={props.color || '#fff'}
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M13.75 7.917h.014v.014h-.014z"
      ></Path>
      <Path
        stroke={props.color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M13.75 13.75v5.833"
      ></Path>
    </Svg>
  );
};

export default InfoIcon;
