import { rs, rh, rw } from '..';
import { PATTERN_REGEX, NUMBER_STRING_REGEX } from '../../utils/constants';
import type { ValuePattern, CreateStyleConfig } from '../../types';

export const parseValue = (
  key: string,
  value: ValuePattern | undefined,
  styleConfig?: Partial<CreateStyleConfig>
) => {
  if (!value || typeof value !== 'string') {
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
