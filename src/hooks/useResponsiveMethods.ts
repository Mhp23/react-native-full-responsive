import { useCallback } from 'react';
import { useDevice } from './useDevice';
import { useWindowDimensions } from 'react-native';
import { responsiveScale, responsiveWidth, responsiveHeight } from '../layout';

const useResponsiveMethods = () => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();
  /**
   * The responsive scaled size will be calculated using the passed size.
   * @param size
   * @returns scaled size, if the passed size is not a number, it will default to `0`.
   */
  const rs = useCallback(
    (size: number | undefined) => {
      return responsiveScale(size, width, height, device);
    },
    [device, height, width]
  );
  /**
   * The responsive width size will be calculated using the passed percentage.
   * @param widthPercentage
   * @returns calculated size, if the passed percentage is not a number, it will default to `0`.
   */
  const rw = useCallback(
    (widthPercentage: number | undefined) => {
      return responsiveWidth(widthPercentage, width);
    },
    [width]
  );
  /**
   * The responsive height size will be calculated using the passed percentage.
   * @param heightPercentage
   * @returns calculated size, if the passed percentage is not a number, it will default to `0`.
   */
  const rh = useCallback(
    (heightPercentage: number | undefined) => {
      return responsiveHeight(heightPercentage, height);
    },
    [height]
  );

  return { rs, rw, rh };
};

export { useResponsiveMethods, useResponsiveMethods as useRM };
