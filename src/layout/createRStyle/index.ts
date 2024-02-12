import { StyleSheet } from 'react-native';
import { linearMapping } from './mapping/linearMapping';
import { recursiveMapping } from './mapping/recursiveMapping';
import type { StyleType, NamedStyles, CreateStyleConfig } from '../../types';
/**
 * Creating responsive styles, instead of using `StyleSheet.create({})`, you can use `createRStyle` (create responsive style)
 * to generate your responsive styles for your components.
 * ```ts
 * const styles = createRStyle({
 *  container: {
 *    flex: 1,
 *  },
 *  box: {
 *    width: '10rw', //instead of using responsiveWidth method
 *    height: '20rh', //instead of using responsiveHeight method
 *  },
 *  text: {
 *    fontSize: '10rs', //instead of using responsiveScale method
 *  },
 *  //...
 * })
 * ```
 * @param styles
 * @param styleConfig
 */
export const createRStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  style: T,
  styleConfig?: Partial<CreateStyleConfig>
): StyleType<T> => {
  const responsivedStyles =
    styleConfig?.method === 'linear'
      ? linearMapping(style, styleConfig)
      : recursiveMapping(style, styleConfig);
  //@ts-ignore
  return StyleSheet.create(responsivedStyles);
};
