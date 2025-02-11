import { type MaybeNumber } from 'src/types';
import { useResponsiveWidth } from './useResponsiveWidth';
import { useResponsiveHeight } from './useResponsiveHeight';

const useResponsiveDim = (
  widthPercentage: MaybeNumber,
  heightPercentage: MaybeNumber
) => {
  const width = useResponsiveWidth(widthPercentage);
  const height = useResponsiveHeight(heightPercentage);
  return { width, height };
};

export { useResponsiveDim, useResponsiveDim as useRD };
