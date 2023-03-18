import { useResponsiveWidth } from './useResponsiveWidth';
import { useResponsiveHeight } from './useResponsiveHeight';

const useResponsiveDim = (
  widthPercentage: number,
  heightPercentage: number
) => {
  if (!widthPercentage || !heightPercentage) {
    throw new Error(
      'for using useResponsiveDim should pass both widthPercentage and heightPercentage as arguments.'
    );
  }
  const width = useResponsiveWidth(widthPercentage);
  const height = useResponsiveHeight(heightPercentage);
  return { width, height };
};

export { useResponsiveDim, useResponsiveDim as useRD };
