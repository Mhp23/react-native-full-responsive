import { useResponsiveWidth } from './useResponsiveWidth';
import { useResponsiveHeight } from './useResponsiveHeight';

const useResponsiveDim = (
  widthPercentage: number | undefined,
  heightPercentage: number | undefined
) => {
  const width = useResponsiveWidth(widthPercentage);
  const height = useResponsiveHeight(heightPercentage);
  return { width, height };
};

export { useResponsiveDim, useResponsiveDim as useRD };
