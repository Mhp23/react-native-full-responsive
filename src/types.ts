import type { ReactNode } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

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
export type StyleStack = {
  style: any;
  parentPath: unknown;
};
export type WithPattern<T> = {
  [P in keyof T]: number extends T[P] ? ResponsivePattern | T[P] : T[P];
};
export type NamedStyles<T> = {
  [P in keyof T]:
    | WithPattern<ViewStyle>
    | WithPattern<TextStyle>
    | WithPattern<ImageStyle>;
};
export type Pattern = 'rs' | 'rw' | 'rh';
export type ResponsivePattern = `${number}${Pattern}`;
export type ValuePattern = string | number | ResponsivePattern;
export type CreateStyleConfig = {
  /**
   * To specify the parsing styles method, in this case, the recursive method is faster,
   * unless for deep and large structure objects, where the linear algorithm may yield better results,
   * considering both time and space complexity.
   * @default recursive
   */
  method: 'linear' | 'recursive';
  /**
   * To use custom dimensions width for the calculation
   */
  width: number;
  /**
   * To use custom dimensions height for the calculation
   */
  height: number;
  /**
   * To use a specific responsive scale method config for applying when using `rs` for style properties
   */
  scaleConfig: ContextProps;
};
