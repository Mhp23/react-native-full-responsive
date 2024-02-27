import { type DependencyList, useMemo } from 'react';
import { useDevice } from './useDevice';
import { createRStyle } from '../layout';
import { useWindowDimensions } from 'react-native';
import type { MethodType, NamedStyles } from '../types';

export const useRStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T,
  deps: DependencyList = [],
  method: MethodType = 'recursive'
) => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();

  const dependencies = [width, height, method, device, ...deps];

  const responsivedStyles = useMemo(() => {
    return createRStyle(styles, {
      width,
      height,
      method,
      scaleConfig: device,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return responsivedStyles;
};
