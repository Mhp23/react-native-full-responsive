import { useMemo } from 'react';
import { rw } from '../layout';
import { MaybeNumber } from 'src/types';
import { useWindowDimensions } from 'react-native';

const useResponsiveWidth = (widthPercentage: MaybeNumber) => {
  const { width: screenWidth } = useWindowDimensions();

  const width = useMemo(() => {
    return rw(widthPercentage, screenWidth);
  }, [screenWidth, widthPercentage]);

  return width;
};

export { useResponsiveWidth, useResponsiveWidth as useRW };
