import { PixelRatio } from 'react-native';
import { getDimensions } from '../utils';
import { getBaseWidth } from './getBaseWidth';
import type { ContextProps, MaybeNumber } from '../types';

const { screenWidth, screenHeight } = getDimensions();
/**
 * The responsive width size will be calculated using the passed percentage.
 * @param widthPercentage
 * @param width screen width of device
 * @returns calculated size, if the passed percentage is not a number, it will be the passed value.
 */
const responsiveWidth = <T extends MaybeNumber = number>(
  widthPercentage: T,
  width = screenWidth
) => {
  if (typeof widthPercentage !== 'number') {
    return widthPercentage;
  }
  return PixelRatio.roundToNearestPixel((width * widthPercentage) / 100);
};
/**
 * The responsive height size will be calculated using the passed percentage.
 * @param heightPercentage
 * @param height screen height of device
 * @returns calculated size, if the passed percentage is not a number, it will be the passed value.
 */
const responsiveHeight = <T extends MaybeNumber = number>(
  heightPercentage: T,
  height = screenHeight
) => {
  if (typeof heightPercentage !== 'number') {
    return heightPercentage;
  }
  return PixelRatio.roundToNearestPixel((height * heightPercentage) / 100);
};
/**
 * The responsive scaled size will be calculated using the passed size.
 * @param size
 * @param width screen width of device
 * @param height screen height of device
 * @returns scaled size, if the passed size is not a number, it will be the passed value.
 */
const responsiveScale = <T extends MaybeNumber = number>(
  size: T,
  width = screenWidth,
  height = screenHeight,
  config?: Partial<ContextProps>
) => {
  if (typeof size !== 'number') {
    return size;
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
