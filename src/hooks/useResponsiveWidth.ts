import React from 'react';
import { rw } from '../layout';
import { useWindowDimensions } from 'react-native';

const useResponsiveWidth = (widthPercentage: number): number => {
  if (!widthPercentage) {
    throw new Error(
      'for using useResponsiveWidth should pass widthPercentage as argument.'
    );
  }
  const { width: screenWidth } = useWindowDimensions();

  const [width, setWidth] = React.useState<number>(() =>
    rw(widthPercentage, screenWidth)
  );

  React.useEffect(() => {
    let newWidth = rw(widthPercentage, screenWidth);
    setWidth(newWidth);
  }, [widthPercentage, screenWidth]);

  return width;
};

export { useResponsiveWidth, useResponsiveWidth as useRW };
