import { parseValue } from '../parseValue';
import type { ValuePattern, CreateStyleConfig } from '../../../types';

export const recursiveMapping = <T>(
  style: T,
  styleConfig?: Partial<CreateStyleConfig>
): T => {
  /**
   * WeakMap to store references to already processed objects and arrays
   * to avoid redundant processing and improve performance (caching).
   */
  const cache = new WeakMap<object, T>();
  const mapper = (currentStyle: unknown): unknown => {
    if (currentStyle == null || typeof currentStyle !== 'object') {
      return parseValue(currentStyle as ValuePattern, styleConfig);
    }
    const cachedResult = cache.get(currentStyle);
    if (cachedResult) return cachedResult;
    /**
     * Create an empty result structure to hold the mapped values
     */
    const result = Array.isArray(currentStyle)
      ? currentStyle.map(mapper)
      : Object.create(null);
    /**
     * Recursively map each property in the current object (or array element).
     * If the currentStyle is an object, we loop through its properties and apply `mapper` to each one.
     */
    for (const property in currentStyle) {
      result[property] = mapper(
        (currentStyle as Record<string, unknown>)[property]
      );
    }
    cache.set(currentStyle, result);
    return result;
  };
  return mapper(style) as T;
};
