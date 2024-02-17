import _ from 'lodash';
import type {
  StyleStack,
  ValuePattern,
  CreateStyleConfig,
} from '../../../types';
import { parseValue } from '../parseValue';

export const linearMapping = <T>(
  style: T,
  styleConfig?: Partial<CreateStyleConfig>
) => {
  const stack: StyleStack[] = [{ style, parentPath: '' }];
  while (stack.length > 0) {
    const { style: currentStyle, parentPath } = stack.pop()!;
    if (Array.isArray(currentStyle)) {
      for (let i = 0; i < currentStyle.length; ++i) {
        stack.push({
          style: currentStyle[i],
          parentPath: `${parentPath}[${i}]`,
        });
      }
    } else if (typeof currentStyle === 'object' && currentStyle !== null) {
      for (const [property, currentValue] of Object.entries(currentStyle)) {
        if (typeof currentValue !== 'object' || currentValue === null) {
          const parsedVal = parseValue(
            currentValue as ValuePattern,
            styleConfig
          );
          style = _.set<T>(
            style as object,
            `${parentPath}.${property}`,
            parsedVal
          );
        } else {
          stack.push({
            style: currentValue,
            parentPath: parentPath ? `${parentPath}.${property}` : property,
          });
        }
      }
    }
  }
  return style;
};
