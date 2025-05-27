export const getDimensions = jest.fn(() => ({
  screenWidth: 375,
  screenHeight: 667,
}));

export const withMediaQuery = jest.fn(
  (Component, _thresholds = {}) => Component
);
export const withMQ = withMediaQuery;

export const withResponsiveMethods = jest.fn((Component) => Component);
export const withRM = withResponsiveMethods;

export const useDevice = jest.fn(() => ({ type: 'sm', bases: {} }));

export const useMediaQuery = jest.fn(() => 'sm');
export const useMQ = useMediaQuery;

export const useResponsiveDim = jest.fn(() => ({ width: 100, height: 100 }));
export const useRD = useResponsiveDim;

export const useResponsiveScale = jest.fn(() => 1);
export const useRS = useResponsiveScale;

export const useResponsiveWidth = jest.fn(() => 100);
export const useRW = useResponsiveWidth;

export const useResponsiveHeight = jest.fn(() => 100);
export const useRH = useResponsiveHeight;

export const useResponsiveMethods = jest.fn(() => ({
  rs: jest.fn((n) => n),
  rw: jest.fn((n) => n),
  rh: jest.fn((n) => n),
}));
export const useRM = useResponsiveMethods;

export const FRContext = { Provider: jest.fn(), Consumer: jest.fn() };
export const FRProvider = jest.fn(({ children }) => children);

export const responsiveScale = jest.fn((size) => size);
export const rs = responsiveScale;

export const responsiveWidth = jest.fn((widthPercentage) => widthPercentage);
export const rw = responsiveWidth;

export const responsiveHeight = jest.fn((heightPercentage) => heightPercentage);
export const rh = responsiveHeight;

export const createRStyle = jest.fn((style, _styleConfig = {}) => style);

export const useRStyle = jest.fn((styles, _deps = []) => {
  const passedStyles = typeof styles === 'function' ? styles() : styles;
  return createRStyle(passedStyles);
});
