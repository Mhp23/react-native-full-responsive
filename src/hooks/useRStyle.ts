import { type DependencyList, useMemo } from 'react';
import { useDevice } from './useDevice';
import { createRStyle } from '../layout';
import { useWindowDimensions } from 'react-native';
import type { NamedStyles } from '../types';
/**
 * A hook is provided for createRStyle to create a dynamic responsive scale. This hook generates a new style when there are changes in dimensions, the parsing method, type, or bases.
 * @param styles
 * @param deps dependency list to regenerate styles after changing them, and default is an empty array
 * @returns a responsive styles `object`
 */
export const useRStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | (() => T),
  deps: DependencyList = []
) => {
  const device = useDevice();

  const { width, height } = useWindowDimensions();

  const dependencies = [width, height, device, ...deps];

  const responsivedStyles = useMemo(() => {
    const passedStyles = typeof styles === 'function' ? styles() : styles;
    return createRStyle(passedStyles, {
      width,
      height,
      scaleConfig: device,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return responsivedStyles;
};
