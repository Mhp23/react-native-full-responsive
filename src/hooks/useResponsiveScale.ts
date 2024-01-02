import React from 'react';
import { rs } from '../layout';
import { useWindowDimensions } from 'react-native';
import { useDevice } from './useDevice';

const useResponsiveScale = (size: number): number => {
  if (!size) {
    throw new Error(
      'for using useResponsiveScale should pass size as argument.'
    );
  }
  const device = useDevice();

  const { width, height } = useWindowDimensions();

  const scaledSize = React.useMemo(() => {
    return rs(size, width, height, device);
  }, [size, height, width, device]);

  return scaledSize;
};

export { useResponsiveScale, useResponsiveScale as useRS };
