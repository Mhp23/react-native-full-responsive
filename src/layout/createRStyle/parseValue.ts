import { rs, rh, rw } from '../responsiveMethods';
import { PATTERN_REGEX } from '../../utils/constants';
import type { ValuePattern, CreateStyleConfig } from '../../types';

export const parseValue = (
  value: ValuePattern | undefined,
  styleConfig?: Partial<CreateStyleConfig>
) => {
  if (typeof value !== 'string') {
    return value;
  } else {
    const { width, height, scaleConfig } = styleConfig ?? {};

    const executed = value.match(PATTERN_REGEX);

    if (!executed) {
      return value;
    }
    if (executed[1] === 'undefined') {
      return undefined;
    }
    const styleValue = parseFloat(executed[1] as string);

    const suffix = executed[4];

    let responsivedValue;

    switch (suffix) {
      case 'rs':
        responsivedValue = rs(styleValue, width, height, scaleConfig);
        break;
      case 'rw':
        responsivedValue = rw(styleValue, width);
        break;
      case 'rh':
        responsivedValue = rh(styleValue, height);
        break;
      default:
        responsivedValue = value;
    }
    return responsivedValue;
  }
};
