import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const LocationIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props.color || '#fff'}
        d="M15 15a5.625 5.625 0 1 0 0-11.25A5.625 5.625 0 0 0 15 15m0 1.875a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15"
      ></Path>
      <Path
        fill={props.color || '#fff'}
        d="M15 15a.94.94 0 0 1 .938.938v7.5a.938.938 0 0 1-1.876 0v-7.5A.94.94 0 0 1 15 15"
      ></Path>
      <Path
        fill={props.color || '#fff'}
        d="M11.25 19.016v1.904c-3.347.536-5.625 1.694-5.625 2.518 0 1.104 4.099 2.812 9.375 2.812s9.375-1.708 9.375-2.812c0-.825-2.278-1.982-5.625-2.518v-1.904c4.369.644 7.5 2.382 7.5 4.422 0 2.587-5.036 4.687-11.25 4.687s-11.25-2.1-11.25-4.687c0-2.042 3.131-3.778 7.5-4.422"
      ></Path>
    </Svg>
  );
};

export default LocationIcon;
