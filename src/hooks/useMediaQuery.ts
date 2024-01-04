import { useMemo } from 'react';
import { DefaultThresholds } from '../constants';
import { useWindowDimensions } from 'react-native';
import type { DeviceType, MappedDeviceType } from '../types';

const useMediaQuery = (
  thresholds: Partial<MappedDeviceType> = DefaultThresholds
) => {
  const { width, height } = useWindowDimensions();

  const mergedThresholds = useMemo(() => {
    return {
      ...DefaultThresholds,
      ...thresholds,
    };
  }, [thresholds]);

  const deviceSize = useMemo(() => {
    let type: DeviceType;
    const candidatedSize = width < height ? width : height;
    if (candidatedSize <= mergedThresholds.xs) {
      type = 'xs';
    } else if (candidatedSize <= mergedThresholds.sm) {
      type = 'sm';
    } else if (candidatedSize <= mergedThresholds.md) {
      type = 'md';
    } else if (candidatedSize <= mergedThresholds.lg) {
      type = 'lg';
    } else if (candidatedSize <= mergedThresholds.xl) {
      type = 'xl';
    } else {
      type = '2xl';
    }
    return type;
  }, [mergedThresholds, height, width]);

  return deviceSize;
};

export { useMediaQuery, useMediaQuery as useMQ };
