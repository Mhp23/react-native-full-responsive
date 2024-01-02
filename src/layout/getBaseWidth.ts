import { DefaultBases } from '../constants';
import type { DeviceType, MappedDeviceType } from '../types';

export const getBaseWidth = (
  deviceType: DeviceType = 'sm',
  baseSizes: Partial<MappedDeviceType> = DefaultBases
) => {
  return baseSizes[deviceType] || DefaultBases.sm;
};
