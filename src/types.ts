export interface ResponsiveMethodsProps {
  rs: (size: number) => number;
  rw: (widthPercentage: number) => number;
  rh: (heightPercentage: number) => number;
}
