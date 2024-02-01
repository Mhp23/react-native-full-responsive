import { rs, rh, rw } from '.';
import { PATTERN_REGEX, NUMBER_STRING_REGEX } from '../utils/constants';
import type { NamedStyles, ValuePattern, CreateStyleConfig } from '../types';

export const parseValue = (
  key: string,
  value: ValuePattern | undefined,
  styleConfig?: Partial<CreateStyleConfig>
) => {
  if (!value || typeof value === 'number') {
    return value;
  } else {
    const { width, height, scaleConfig } = styleConfig ?? {};

    const executed = value.match(PATTERN_REGEX);

    const styleValue = executed?.[1];

    const suffix = executed?.[2];
    /**
     * Showing warning on development mode if the value of the style property follows the wrong pattern.
     */
    if (__DEV__ && !suffix) {
      const hasWrongPattern = NUMBER_STRING_REGEX.test(value);
      if (hasWrongPattern) {
        console.warn(
          `Value of "${key}" property is invalid, the property value type should be "number", "string", or follow "number(rs|rw|rh|%)" pattern`
        );
      }
    }
    let responsivedValue;

    const toNumValue = Number(styleValue);

    switch (suffix) {
      case 'rs':
        responsivedValue = rs(toNumValue, width, height, scaleConfig);
        break;
      case 'rw':
        responsivedValue = rw(toNumValue, width);
        break;
      case 'rh':
        responsivedValue = rh(toNumValue, height);
        break;
      default:
        responsivedValue = value;
    }
    return responsivedValue;
  }
};
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
