import { PixelRatio } from 'react-native';
import { getDimensions } from '../utils';
import { getBaseWidth } from './getBaseWidth';
import type { ContextProps } from '../types';

const { screenWidth, screenHeight } = getDimensions();
/**
 * the responsive width size using passed width percentage.
 * @param widthPercentage
 * @param width screen width of device
 * @returns {Number}
 */
const responsiveWidth = (
  widthPercentage: number,
  width = screenWidth
): number => {
  return PixelRatio.roundToNearestPixel((width * widthPercentage) / 100);
};
/**
 * the responsive height size using passed height percentage.
 * @param heightPercentage
 * @param height screen height of device
 * @returns {Number}
 */
const responsiveHeight = (
  heightPercentage: number,
  height = screenHeight
): number => {
  return PixelRatio.roundToNearestPixel((height * heightPercentage) / 100);
};
/**
 * the responsive scale value using passed size, recommended to use this for creating resposnive font,
 * padding and margin and for width use at responsiveWidth (rw) also for height, use at responsiveHeight (rh).
 * @param size
 * @param width
 * @param height
 * @returns {Number}
 */
const responsiveScale = (
  size: number,
  width = screenWidth,
  height = screenHeight,
  config?: ContextProps
) => {
  const baseWidth = getBaseWidth(config?.type, config?.bases);
  let dimension = width < height ? width : height;
  return (dimension / baseWidth) * size;
};

export {
  responsiveScale,
  responsiveWidth,
  responsiveHeight,
  responsiveScale as rs,
  responsiveWidth as rw,
  responsiveHeight as rh,
};
