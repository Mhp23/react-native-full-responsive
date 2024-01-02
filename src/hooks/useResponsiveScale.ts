import React from 'react';
import { rs } from '../layout';
import { useDevice } from './useDevice';
import { useWindowDimensions } from 'react-native';

const useResponsiveScale = (size: number): number => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();

  const scaledSize = React.useMemo(() => {
    return rs(size, width, height, device);
  }, [size, height, width, device]);

  return scaledSize;
};

export { useResponsiveScale, useResponsiveScale as useRS };
