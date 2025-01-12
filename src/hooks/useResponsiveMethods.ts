import { useCallback } from 'react';
import { useDevice } from './useDevice';
import { type MaybeNumber } from 'src/types';
import { useWindowDimensions } from 'react-native';
import { responsiveScale, responsiveWidth, responsiveHeight } from '../layout';

const useResponsiveMethods = () => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();
  /**
   * The responsive scaled size will be calculated using the passed size.
   * @param size
   * @returns scaled size, if the passed size is not a number, it will be the passed value.
   */
  const rs = useCallback(
    <T extends MaybeNumber = number>(size: T) => {
      return responsiveScale(size, width, height, device);
    },
    [device, height, width]
  );
  /**
   * The responsive width size will be calculated using the passed percentage.
   * @param widthPercentage
   * @returns calculated size, if the passed percentage is not a number, it will be the passed value.
   */
  const rw = useCallback(
    <T extends MaybeNumber = number>(widthPercentage: T) => {
      return responsiveWidth(widthPercentage, width);
    },
    [width]
  );
  /**
   * The responsive height size will be calculated using the passed percentage.
   * @param heightPercentage
   * @returns calculated size, if the passed percentage is not a number, it will be the passed value.
   */
  const rh = useCallback(
    <T extends MaybeNumber = number>(heightPercentage: T) => {
      return responsiveHeight(heightPercentage, height);
    },
    [height]
  );

  return { rs, rw, rh };
};

export { useResponsiveMethods, useResponsiveMethods as useRM };
