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

Using this package you are be able to easily design your layouts, fonts etc responsive for all devices in all supported React Native platforms.
Also if you like to read [How to make full responsive our React Native applications?](https://medium.com/@hpousty/how-to-make-full-responsive-our-react-native-applications-9adaf26c11b1) article in Medium.

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
Before to show how you can use it, all methods in the package have two ways to use, first long syntax and second brief syntax, depending on how you like to import and using, you capable of use that.

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
} from 'react-native-full-responsive';
```
Consider the input argument for ***responsiveWidth*** and ***responsiveHeight*** method as percentage (numeric like 5, 10 or whatever you want) and ***responsiveScale*** will return scaled value depending on the device.

If your device is not just portrait or landscape, you can use the hooks in functional components or if you are using class base components, you are capable of defining ```Dimensions.addEventListener``` in your component and when dimensions change, as second argument pass screen width for responsiveWidth and pass screen height for responsiveHeight, also for responsiveScale you should pass both screen width and height as the second and third arguments to the function.

**Recommended to use *responsiveScale (rs)* for creating responsive font, padding and margin also for width use at *responsiveWidth (rw)* also for height, use at *responsiveHeight (rh)*.**

## Example

 ```js
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { rh, rs, useRS } from 'react-native-full-responsive';

const SIZE = 20;

export default function App() {
  const fontSize = useRS(SIZE);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={[styles.textBold, { fontSize: SIZE }]}>
          without react-native-full-responsive
        </Text>
      </View>
      <View style={styles.responsiveBox}>
        <Text style={[styles.textBold, { fontSize }]}>
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
    height: rh(SIZE),
    justifyContent: 'center',
    marginVertical: rs(SIZE),
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
