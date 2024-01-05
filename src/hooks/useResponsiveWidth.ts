import React from 'react';
import { rw } from '../layout';
import { useWindowDimensions } from 'react-native';

const useResponsiveWidth = (widthPercentage: number | undefined) => {
  const { width: screenWidth } = useWindowDimensions();

  const width = React.useMemo(() => {
    return rw(widthPercentage, screenWidth);
  }, [screenWidth, widthPercentage]);

  return width;
};

export { useResponsiveWidth, useResponsiveWidth as useRW };
