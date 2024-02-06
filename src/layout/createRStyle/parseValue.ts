import { rs, rh, rw } from '..';
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

    const styleValue = executed?.[1];

    const suffix = executed?.[2];

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
