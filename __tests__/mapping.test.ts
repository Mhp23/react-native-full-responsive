import { rh, rs, rw } from '../src';
import { recursiveMapping } from '../src/layout/createRStyle/mapping/recursiveMapping';

describe('recursive mapping tests', () => {
  it("should returns input value if it isn't an object or array", () => {
    expect(recursiveMapping(undefined)).toEqual(undefined);
    expect(recursiveMapping(null)).toEqual(null);
    expect(recursiveMapping(123)).toEqual(123);
    expect(recursiveMapping(true)).toEqual(true);
    expect(recursiveMapping('style')).toEqual('style');
  });

  it('should map empty object and nested objects correctly', () => {
    expect(recursiveMapping({})).toEqual({});
    expect(
      recursiveMapping({
        container: {},
        text: {},
        box: {
          transoform: [],
        },
      })
    ).toEqual({
      container: {},
      text: {},
      box: {
        transoform: [],
      },
    });
  });

  it('should map an object correctly', () => {
    const input = {
      container: {
        flex: 1,
        padding: '20rs',
      },
      box: {
        width: '10rw',
        height: '10rh',
      },
    };
    const expectedResult = {
      container: {
        flex: 1,
        padding: rs(20),
      },
      box: {
        width: rw(10),
        height: rh(10),
      },
    };
    expect(recursiveMapping(input)).toEqual(expectedResult);
  });

  it('should map an array correctly', () => {
    const input = [{ box: { width: '10rs' } }, { box2: { width: '12.5rs' } }];
    const expectedResult = [
      { box: { width: rs(10) } },
      { box2: { width: rs(12.5) } },
    ];
    expect(recursiveMapping(input)).toEqual(expectedResult);
  });

  it('should map deep nested arrays and objects correctly', () => {
    const input = {
      box: {
        nestedArray: [
          {
            width: '10rs',
          },
        ],
        nestedBox: {
          nestedArray: [
            {
              height: '10rw',
            },
          ],
        },
      },
      box2: {
        nestedBox: {
          nestedBox2: {
            padding: '12.5rh',
          },
        },
      },
    };
    const expectedResult = {
      box: {
        nestedArray: [
          {
            width: rs(10),
          },
        ],
        nestedBox: {
          nestedArray: [
            {
              height: rw(10),
            },
          ],
        },
      },
      box2: {
        nestedBox: {
          nestedBox2: {
            padding: rh(12.5),
          },
        },
      },
    };
    expect(recursiveMapping(input)).toEqual(expectedResult);
  });
});
