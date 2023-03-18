import React from 'react';
import { rh } from '../layout';
import { useWindowDimensions } from 'react-native';

const useResponsiveHeight = (heightPercentage: number): number => {
  if (!heightPercentage) {
    throw new Error(
      'for using useResponsiveHeight should pass heightPercentage as argument.'
    );
  }
  const { height: screenHeight } = useWindowDimensions();

  const [height, setHeight] = React.useState<number>(() =>
    rh(heightPercentage, screenHeight)
  );

  React.useEffect(() => {
    let newWidth = rh(heightPercentage, screenHeight);
    setHeight(newWidth);
  }, [heightPercentage, screenHeight]);

  return height;
};

export { useResponsiveHeight, useResponsiveHeight as useRH };
