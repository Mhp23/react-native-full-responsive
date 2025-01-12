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
    const styleValue = parseFloat(executed[1]!);
    const suffix = executed[4];
    switch (suffix) {
      case 'rs':
        return rs(styleValue, width, height, scaleConfig);
      case 'rw':
        return rw(styleValue, width);
      case 'rh':
        return rh(styleValue, height);
      default:
        return value;
    }
  }
};
