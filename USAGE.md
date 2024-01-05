<h2>📚 React Native Full Responsive Usage Documentation</h2>

- [Full Responsive Provider](#full-responsive-provider)
- [responsiveScale (rs)](#responsivescale-rs)
- [responsiveWidth (rw)](#responsivewidth-rw)
- [responsiveHeight (rh)](#responsiveheight-rh)
- [useResponsiveMethods (useRM)](#useresponsivemethods-userm)
- [useResponsiveScale (useRS)](#useresponsivescale-users)
- [useResponsiveWidth (useRW)](#useresponsivewidth-userw)
- [useResponsiveHeight (useRH)](#useresponsiveheight-userh)
- [useResponsiveDim (useRD)](#useresponsivedim-userd)
- [useMediaQuery (useMQ)](#usemediaquery-usemq)
- [HOC](#hoc)

All methods within this package offer two usage options, a longer syntax for those who prefer explicitness, and an abbreviated version for those who prefer conciseness. Choose the approach that best suits your preferred import and usage style.

```js
import {
  useMediaQuery,
  responsiveScale,
  responsiveWidth,
  responsiveHeight,
  useResponsiveDim,
  useResponsiveScale,
  useResponsiveWidth,
  useResponsiveHeight,
  useResponsiveMethods,
  //HOC
  withMediaQuery,
  withResponsiveMethods,
} from 'react-native-full-responsive';
//or
import {
  rs,
  rw,
  rh,
  useRD,
  useRS,
  useRW,
  useRH,
  useRM,
  useMQ,
  //HOC
  withMQ,
  withRM,
} from 'react-native-full-responsive';
```

## Full Responsive Provider

To use the `responsiveScale` hooks, first you should use `FRProvider` in the root component.

```tsx
import { FRProvider } from 'react-native-full-responsive';
//...

export default function App() {
  return (
    <FRProvider>
      {
        //...
      }
    </FRProvider>
  );
}
```
The provider accepts `bases` and `type` props; explanations of each follow.

<h3>type</h3>

Specifies the current device dimension type that size scaling calculations will use, based on specified related bases.

*Possible values*: `xs` | `sm` | `md` | `lg` | `xl` | `2xl`

*Default*: `sm`

*Determination* (suggestion): 
- Can be based on device specification type (e.g., "sm" for smartphones, "md" for tablets).
- Can be dynamically determined using the [useMediaQuery]('#useMediaQuery-(useMQ)) hook, based on device dimensions.

<h3>bases</h3>

*Description*: Specifies or overrides default experimental base sizes to achieve the ideal point for scaling for each dimension type.

*Default*:
```ts
{
  'xs' = 320,
  'sm' = 360,
  'md' = 520,
  'lg' = 680,
  'xl' = 740,
  '2xl' = 920,
}
```

⚠️ ***Note: While we'll explore the three main methods and their usage below, it's highly recommended to use the provided hooks (and HOCs for class components) for dynamic dimensions and a more streamlined approach.***

## responsiveScale (rs)

This function scales the passed size based on the user's device dimensions and base width size and returns the scaled value. It accepts the following arguments:

1. Required argument: The size to be scaled.
   
2. Optional argument (for event listeners): The screen width.

3. Optional argument (for event listeners): The screen height.

4. Optional argument (for specifying current `type` and custom `bases`)

The second and third arguments are only needed when adding an event listener to respond to dimension changes (e.g., switching between portrait and landscape modes) and forth arguments to specify current `type` and custom `bases`.

In function components, you can use the [useResponsiveScale](#useResponsiveScale) or [useResponsiveMethods](#useResponsiveMethods) hooks for a more streamlined approach. It only requires passing the size to be scaled, eliminating the need for additional steps or arguments.

```tsx
  import { rs } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    //...
    return (
      <Text style={{fontSize: rs(16)}}>
        My Scaled Text!
      </Text>
    )
  }
```

## responsiveWidth (rw)

This method calculates a responsive value based on a numeric percentage value, utilizing `PixelRatio` and the provided width size. Its usage is similar to [responsiveScale](#responsivescale-rs), but it differs in that it only takes two arguments:

1. Required argument: A numeric **percentage** value.

2. Optional argument: A custom screen width for width calculations.

```tsx
  import { rw } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    //...
    return (
      <View style={{width: rw(5)}}>
        {
          //...
        }
      </View>
    )
  }
```

## responsiveHeight (rh)

This method calculates a responsive value based on a numeric percentage value, utilizing `PixelRatio` and the provided height size. Its usage is similar to [responsiveScale](#responsivescale-rs), but it differs in that it only takes two arguments:

1. Required argument: A numeric **percentage** value.

2. Optional argument: A custom screen height for height calculations.

```tsx
  import { rh } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    //...
    return (
      <View style={{height: rh(10)}}>
        {
          //...
        }
      </View>
    )
  }
```

## useResponsiveMethods (useRM)

This hook provides `rs`, `rw`, and `rh` methods, which simplify usage by only requiring the needed size to be passed. It automatically detects dimension changes, including landscape/portrait mode switches and `type` updates for scaling sizes on the provider, ensuring responsiveness without manual intervention.

```tsx
  import { useResponsiveMethods } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    const {rs, rw, rh} = useResponsiveMethods(); //or useRM
    //...
    return (
      <Text style={{fontSize: rs(16)}}>
        My Scaled Text!
      </Text>
    )
  }
```

## useResponsiveScale (useRS)

A hook is provided for [responsiveScale](#responsivescale-rs), which only requires passing a size for scaling.

```tsx
  import { useResponsiveScale } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    const fontSize = useResponsiveScale(16)
    //...
    return (
      <Text style={{fontSize}}>
        My Scaled Text!
      </Text>
    )
  }
```

## useResponsiveWidth (useRW)

A hook is provided for [responsiveWidth](#responsivewidth-rw), which only requires passing a percentage size.

```tsx
  import { useResponsiveWidth } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    const width = useResponsiveWidth(5)
    //...
    return (
      <View style={{width}}>
        {
          //...
        }
      </View>
    )
  }
```

## useResponsiveHeight (useRH)

A hook is provided for [responsiveHeight](#responsivewheight-rh), which only requires passing a percentage size.

```tsx
  import { useResponsiveHeight } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    const height = useResponsiveHeight(10)
    //...
    return (
      <View style={{height}}>
        {
          //...
        }
      </View>
    )
  }
```

## useResponsiveDim (useRD)

A hook is provided responsive width and height together and could to use it like below:

```tsx
  import { useResponsiveDim } from 'react-native-full-responsive';
  //...
  const MyComponent = () => {
    const { width, height } = useResponsiveDim(10)
    //...
    return (
      <View style={{width, height}}>
        {
          //...
        }
      </View>
    )
  }
```

## useMediaQuery (useMQ)

A hook is provided to retrieve the `type` of dimension size (`xs` | `sm` | `md` | `lg` | `xl` | `2xl`) based on specified thresholds. These thresholds can be overridden either entirely or selectively for specific dimensions. This hook offers benefits for use within the provider or when actions need to be performed based on type specifications.

*Default*:
```ts
{
  'xs': 320,
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
  '2xl': 1440,
}
```

```tsx
import { FRProvider, useMediaQuery } from 'react-native-full-responsive';
//...

const customThrsholds = {
  //...
}

export default function App() {
  const type = useMediaQuery(customThrsholds);

  return (
    <FRProvider type={type}>
      {
        //...
      }
    </FRProvider>
  );
}
```

## HOC

If you use class components, it's all under control! You can access `rs`, `rw`, and `rh` functions using the `withResponsiveMethods` (or withRM) HOC. For media query, use the `withMediaQuery` (or withMQ) HOC. For detailed guidance on employing these HOCs within your class components, kindly refer to [the class app examples](./example/src/ClassApp/).
