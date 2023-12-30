# react-native-full-responsive

# Contents
- [react-native-full-responsive](#react-native-full-responsive)
- [Contents](#contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#example)
  - [Contributing](#contributing)
  - [License](#license)

Create your React Native app full responsive.

Using this package you can easily design your layouts, fonts, etc responsive for all devices in all supported React Native platforms.
Also if you like to read [How to make fully responsive our React Native applications?](https://medium.com/@hpousty/how-to-make-full-responsive-our-react-native-applications-9adaf26c11b1) article in Medium.

<p align="center">
  <img src="./baner.jpg" />
</p>

## Installation

```sh
npm install react-native-full-responsive --save

//or

yarn add react-native-full-responsive
```

## Usage
**Supported for React Native >= 0.60**<br/>
Before showing how you can use it, all methods in the package have two ways to use, first long syntax and second brief syntax, depending on how you like to import and use, you capable of using that.

```js
//the first way
import {
  responsiveScale,
  responsiveWidth,
  responsiveHeight,
  useResponsiveDim,
  useResponsiveScale,
  useResponsiveWidth,
  useResponsiveHeight,
  useResponsiveMethods,
  withResponsiveMethods,
} from 'react-native-full-responsive';
//or briefly
import {
  rs,
  rw,
  rh,
  useRD,
  useRS,
  useRW,
  useRH,
  useRM,
  withRM,
} from 'react-native-full-responsive';
```
Consider the input argument for ***responsiveWidth*** and ***responsiveHeight*** methods as a percentage (numeric like 5, 10, or whatever you want), also ***responsiveScale*** will return a scaled value depending on the device.

**Recommended to use *responsiveScale (rs)* for creating responsive font, padding and margin, also for width use at *responsiveWidth (rw)* for height, use at *responsiveHeight (rh)*.**

If you want to use **useResponsiveMethods** without additional steps as props use in your class components, just wrap your component in **withResponsiveMethods** or **withRM** HOC. For more info please check out [withResponsiveMethods example](https://github.com/Mhp23/react-native-full-responsive/tree/main/example/src/ClassApp/index.tsx) or you are capable of defining ```Dimensions.addEventListener``` in your component and when dimensions change, as a second argument pass screen width for responsiveWidth and pass screen height for responsiveHeight, also for the responsiveScale you should pass both screen width and height as the second and third arguments to the function.

**useResponsiveMethods**
Sometimes you want to use a responsive scale, responsive width, or height inside your component more than once and you want both sizes for portrait and landscape mode, so this hook will be the solution and it will return to you `rs`, `rw` and `rh` methods:

```ts
  import { useResponsiveMethods } from 'react-native-full-responsive'; //or useRM
  //...
  const {rs, rw, rh} = useResponsiveMethods();
```

## Example

```tsx
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { useRM } from 'react-native-full-responsive';

const SIZE = 20;

export default function App() {
  const { rh, rs } = useRM();

  const scaledValue = rs(SIZE);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={[styles.textBold, { fontSize: SIZE }]}>
          without react-native-full-responsive
        </Text>
      </View>
      <View
        style={[
          styles.responsiveBox,
          {
            height: rh(SIZE),
            marginVertical: scaledValue,
          },
        ]}
      >
        <Text style={[styles.textBold, { fontSize: scaledValue }]}>
          with react-native-full-responsive
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: SIZE * 3,
    marginVertical: SIZE,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  responsiveBox: {
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
 ```

 ## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

 ## License
 MIT
