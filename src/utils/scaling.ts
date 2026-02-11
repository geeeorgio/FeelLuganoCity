import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
const widthScale = width / BASE_WIDTH;
const heightScale = height / BASE_HEIGHT;

export const wp = (size: number) => Math.round(widthScale * size);
export const hp = (size: number) => Math.round(heightScale * size);
export const sp = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(widthScale * size));
