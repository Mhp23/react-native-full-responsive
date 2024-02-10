import { DefaultBases, rh, rs, rw } from '../src';
import { parseValue } from '../src/layout/createRStyle/parseValue';

const mockedDimensions = {
  width: 1024,
  height: 720,
};

describe('parse value tests', () => {
  it('should not parse undefined and number values', () => {
    expect(parseValue(undefined)).toEqual(undefined);
    expect(parseValue(10)).toEqual(10);
  });
  it('should parse responsive scale correctly', () => {
    expect(parseValue('10rs')).toEqual(rs(10));
  });
  it('should parse responsive width correctly', () => {
    expect(parseValue('10rw')).toEqual(rw(10));
  });
  it('should parse responsive height correctly', () => {
    expect(parseValue('10rh')).toEqual(rh(10));
  });
  it('should not parse wrong responsive scale patterns', () => {
    expect(parseValue('10 rs')).toEqual('10 rs');
    expect(parseValue('10@rs')).toEqual('10@rs');
    expect(parseValue('rs@10')).toEqual('rs@10');
    expect(parseValue('10r')).toEqual('10r');
    expect(parseValue('10rss')).toEqual('10rss');
  });
  it('should not parse wrong responsive width patterns', () => {
    expect(parseValue('10 rw')).toEqual('10 rw');
    expect(parseValue('10@rw')).toEqual('10@rw');
    expect(parseValue('rw@10')).toEqual('rw@10');
    expect(parseValue('10r')).toEqual('10r');
    expect(parseValue('10rww')).toEqual('10rww');
  });
  it('should not parse wrong responsive height patterns', () => {
    expect(parseValue('10 rh')).toEqual('10 rh');
    expect(parseValue('10@rh')).toEqual('10@rh');
    expect(parseValue('rh@10')).toEqual('rh@10');
    expect(parseValue('10r')).toEqual('10r');
    expect(parseValue('10rhh')).toEqual('10rhh');
  });
  it('should parse responsive scale with custom dimensions', () => {
    const { width, height } = mockedDimensions;
    expect(parseValue('10rs', { width, height })).toEqual(
      rs(10, width, height)
    );
  });
  it('should parse responsive width with custom width', () => {
    const { width } = mockedDimensions;
    expect(parseValue('10rw', { width })).toEqual(rw(10, width));
  });
  it('should parse responsive height with custom height', () => {
    const { height } = mockedDimensions;
    expect(parseValue('10rh', { height })).toEqual(rh(10, height));
  });
  it('should parse responsive scale with custom config', () => {
    const { width, height } = mockedDimensions;
    expect(
      parseValue('10rs', {
        width,
        height,
        scaleConfig: {
          type: 'md',
          bases: DefaultBases,
        },
      })
    ).toEqual(rs(10, width, height, { type: 'md', bases: DefaultBases }));
    expect(
      parseValue('10rs', {
        width,
        height,
        scaleConfig: {
          type: 'lg',
        },
      })
    ).toEqual(rs(10, width, height, { type: 'lg' }));
    expect(
      parseValue('10rs', {
        width,
        height,
        scaleConfig: {
          bases: {
            ...DefaultBases,
            sm: 240,
          },
        },
      })
    ).toEqual(
      rs(10, width, height, {
        bases: {
          ...DefaultBases,
          sm: 240,
        },
      })
    );
  });
});
