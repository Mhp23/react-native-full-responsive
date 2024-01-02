import React from 'react';
import { rs } from '../layout';
import { useWindowDimensions } from 'react-native';

const useResponsiveScale = (size: number): number => {
  if (!size) {
    throw new Error(
      'for using useResponsiveScale should pass size as argument.'
    );
  }
  const { width, height } = useWindowDimensions();

  const scaledSize = React.useMemo(() => {
    return rs(size, width, height);
  }, [size, height, width]);

  return scaledSize;
};

export { useResponsiveScale, useResponsiveScale as useRS };
