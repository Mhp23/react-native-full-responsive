import React from 'react';
import { rh } from '../layout';
import { useWindowDimensions } from 'react-native';

const useResponsiveHeight = (heightPercentage: number | undefined) => {
  const { height: screenHeight } = useWindowDimensions();

  const height = React.useMemo(() => {
    return rh(heightPercentage, screenHeight);
  }, [heightPercentage, screenHeight]);

  return height;
};

export { useResponsiveHeight, useResponsiveHeight as useRH };
