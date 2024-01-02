import type { ReactNode } from 'react';

export enum BASE_SIZES {
  xs = 320,
  sm = 360,
  md = 520,
  lg = 680,
  xl = 740,
  '2xl' = 920,
}
export type PropsWithChildren<P> = P & { children?: ReactNode | undefined };
export type DeviceType = Uncapitalize<keyof typeof BASE_SIZES>;
export type MappedDeviceType = {
  [K in DeviceType]: K extends DeviceType ? number : never;
};
export interface ContextProps {
  /**
   * Specify the current device type to calculation be based on the related base width.
   * @default sm
   */
  type: DeviceType;
  /**
   * The base width sizes for each platform to handle and calculate scaled size based on that.
   */
  bases: Partial<MappedDeviceType>;
}
export interface ResponsiveMethodsProps {
  rs: (size: number) => number;
  rw: (widthPercentage: number) => number;
  rh: (heightPercentage: number) => number;
}
