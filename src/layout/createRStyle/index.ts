import type { NamedStyles, CreateStyleConfig } from '../../types';
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
 * @param _styles
 * @param _styleConfig
 */
const createRStyle = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  _styles: T | NamedStyles<T>,
  _styleConfig?: Partial<CreateStyleConfig>
) => {
  //
};

export default { createRStyle };
