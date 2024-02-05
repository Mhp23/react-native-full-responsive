/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from 'lodash';
import type { CreateStyleConfig } from '../../../types';

const isObject = (value: unknown) =>
  value !== null && typeof value === 'object';

export const recursiveMapping = <T>(
  style: T,
  _styleConfig?: Partial<CreateStyleConfig>
) => {
  return style;
};
