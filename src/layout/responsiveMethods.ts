import { PixelRatio } from 'react-native';
import { getDimensions } from '../utils';
import { getBaseWidth } from './getBaseWidth';
import type { ContextProps } from '../types';

const { screenWidth, screenHeight } = getDimensions();
/**
 * The responsive width size will be calculated using the passed percentage.
 * @param widthPercentage
 * @param width screen width of device
 * @returns calculated size, if the passed percentage is not a number, it will default to `0`.
 */
const responsiveWidth = (
  widthPercentage: number | undefined,
  width = screenWidth
): number => {
  if (typeof widthPercentage !== 'number') {
    return 0;
  }
  return PixelRatio.roundToNearestPixel((width * widthPercentage) / 100);
};
/**
 * The responsive height size will be calculated using the passed percentage.
 * @param heightPercentage
 * @param height screen height of device
 * @returns calculated size, if the passed percentage is not a number, it will default to `0`.
 */
const responsiveHeight = (
  heightPercentage: number | undefined,
  height = screenHeight
): number => {
  if (typeof heightPercentage !== 'number') {
    return 0;
  }
  return PixelRatio.roundToNearestPixel((height * heightPercentage) / 100);
};
/**
 * The responsive scaled size will be calculated using the passed size.
 * @param size
 * @param width screen width of device
 * @param height screen height of device
 * @returns scaled size, if the passed size is not a number, it will default to `0`.
 */
const responsiveScale = (
  size: number | undefined,
  width = screenWidth,
  height = screenHeight,
  config?: Partial<ContextProps>
) => {
  if (typeof size !== 'number') {
    return 0;
  }
  const baseWidth = getBaseWidth(config?.type, config?.bases);
  const dimension = width < height ? width : height;
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
