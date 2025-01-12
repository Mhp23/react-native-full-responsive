import { useMemo } from 'react';
import { rs } from '../layout';
import { useDevice } from './useDevice';
import { type MaybeNumber } from 'src/types';
import { useWindowDimensions } from 'react-native';

const useResponsiveScale = (size: MaybeNumber) => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();

  const scaledSize = useMemo(() => {
    return rs(size, width, height, device);
  }, [size, height, width, device]);

  return scaledSize;
};

export { useResponsiveScale, useResponsiveScale as useRS };
