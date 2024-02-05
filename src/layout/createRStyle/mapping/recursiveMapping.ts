import type { CreateStyleConfig } from '../../../types';

export const recursiveMapping = <T>(
  style: T,
  _styleConfig?: Partial<CreateStyleConfig>
) => {
  return style;
};
