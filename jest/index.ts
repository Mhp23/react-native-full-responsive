const getDimensions = jest.fn(() => ({
  screenWidth: 375,
  screenHeight: 667,
}));

const withMediaQuery = jest.fn((Component, _thresholds = {}) => Component);
const withMQ = withMediaQuery;

const withResponsiveMethods = jest.fn((Component) => Component);
const withRM = withResponsiveMethods;

const useDevice = jest.fn(() => ({ type: 'sm', bases: {} }));

const useMediaQuery = jest.fn(() => 'sm');
const useMQ = useMediaQuery;

const useResponsiveDim = jest.fn(() => ({ width: 100, height: 100 }));
const useRD = useResponsiveDim;

const useResponsiveScale = jest.fn(() => 1);
const useRS = useResponsiveScale;

const useResponsiveWidth = jest.fn(() => 100);
const useRW = useResponsiveWidth;

const useResponsiveHeight = jest.fn(() => 100);
const useRH = useResponsiveHeight;

const useResponsiveMethods = jest.fn(() => ({
  rs: jest.fn((n) => n),
  rw: jest.fn((n) => n),
  rh: jest.fn((n) => n),
}));
const useRM = useResponsiveMethods;

const FRContext = { Provider: jest.fn(), Consumer: jest.fn() };
const FRProvider = jest.fn(({ children }) => children);

const responsiveScale = jest.fn((size) => size);
const rs = responsiveScale;

const responsiveWidth = jest.fn((widthPercentage) => widthPercentage);
const rw = responsiveWidth;

const responsiveHeight = jest.fn((heightPercentage) => heightPercentage);
const rh = responsiveHeight;

const createRStyle = jest.fn((style, _styleConfig = {}) => style);

const useRStyle = jest.fn((styles, _deps = []) => {
  const passedStyles = typeof styles === 'function' ? styles() : styles;
  return createRStyle(passedStyles);
});

export default {
  getDimensions,
  withMediaQuery,
  withMQ,
  withResponsiveMethods,
  withRM,
  useDevice,
  useMediaQuery,
  useMQ,
  useResponsiveDim,
  useRD,
  useResponsiveScale,
  useRS,
  useResponsiveWidth,
  useRW,
  useResponsiveHeight,
  useRH,
  useResponsiveMethods,
  useRM,
  FRContext,
  FRProvider,
  responsiveScale,
  rs,
  responsiveWidth,
  rw,
  responsiveHeight,
  rh,
  createRStyle,
  useRStyle,
};
