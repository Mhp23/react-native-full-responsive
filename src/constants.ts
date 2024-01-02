import { BASE_SIZES, MappedDeviceType } from './types';

export const DefaultBases: MappedDeviceType = {
  'xs': BASE_SIZES.xs,
  'sm': BASE_SIZES.sm,
  'md': BASE_SIZES.md,
  'lg': BASE_SIZES.lg,
  'xl': BASE_SIZES.xl,
  '2xl': BASE_SIZES?.['2xl'],
};
