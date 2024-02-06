import { parseValue } from '../parseValue';
import type { CreateStyleConfig, ValuePattern } from '../../../types';

export const recursiveMapping = <T>(
  style: T,
  styleConfig?: Partial<CreateStyleConfig>
) => {
  const cache = new WeakMap();
  const mapper = (currentStyle: unknown): unknown => {
    if (typeof currentStyle !== 'object' || currentStyle === null) {
      return parseValue(currentStyle as ValuePattern, styleConfig);
    }
    const cachedResult = cache.get(currentStyle);
    if (cachedResult) return cachedResult;
    const result = Array.isArray(currentStyle)
      ? currentStyle.map(mapper)
      : Object.create(null);
    for (const property in currentStyle) {
      //@ts-ignore
      result[property] = mapper(currentStyle[property]);
    }
    cache.set(currentStyle, result);
    return result;
  };
  return mapper(style);
};
