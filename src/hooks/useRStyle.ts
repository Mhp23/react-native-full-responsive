import { useMemo } from 'react';
import { useDevice } from './useDevice';
import { createRStyle } from '../layout';
import { useWindowDimensions } from 'react-native';
import type { MethodType, NamedStyles } from '../types';

export const useRStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T,
  method: MethodType = 'recursive'
) => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();

  const responsivedStyles = useMemo(() => {
    return createRStyle(styles, {
      width,
      height,
      method,
      scaleConfig: device,
    });
  }, [width, height, method, device, styles]);

  return responsivedStyles;
};
