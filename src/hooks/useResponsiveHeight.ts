import { useMemo } from 'react';
import { rh } from '../layout';
import { type MaybeNumber } from 'src/types';
import { useWindowDimensions } from 'react-native';

const useResponsiveHeight = (heightPercentage: MaybeNumber) => {
  const { height: screenHeight } = useWindowDimensions();

  const height = useMemo(() => {
    return rh(heightPercentage, screenHeight);
  }, [heightPercentage, screenHeight]);

  return height;
};

export { useResponsiveHeight, useResponsiveHeight as useRH };
