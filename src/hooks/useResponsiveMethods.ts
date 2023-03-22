import { useWindowDimensions } from 'react-native';
import { responsiveScale, responsiveWidth, responsiveHeight } from '../layout';

const useResponsiveMethods = () => {
  const { width, height } = useWindowDimensions();
  return {
    rs: (size: number) => responsiveScale(size, width, height),
    rw: (widthPercentage: number) => responsiveWidth(widthPercentage, width),
    rh: (heightPercentage: number) =>
      responsiveHeight(heightPercentage, height),
  };
};

export { useResponsiveMethods, useResponsiveMethods as useRM };
