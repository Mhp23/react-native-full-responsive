# react-native-full-responsive

<p align="center">
  <img src="./sim-1x.png" alt="iPhone SE (3rd generation)" width="15%" />
  <img src="./sim-2x.png" alt="iPhone 15 Pro Max" width="15%" />
  <img src="./sim-3x.png" alt="iPad Pro (12.9-inch)" width="29%" />
</p>

<P align="center" style="margin-top: -17.5px">
  <img src="./sim-4x.png" alt="Web" width="59.75%" />
</p>

<h3 align="center">
  Create a fully responsive React Native app for all supported platforms
</h3>

<div align="center">
  <a href="./USAGE.md">Documentation</a> · <a href="/example/src/">Examples</a>
</div>


## 📢 Introduction

This package makes it super easy to create apps responsive that work perfectly on all different screen sizes in React Native (like font size, width, height, and more), making sure everything looks great on any device, from extra small to extra large. You can also tweak how things scale and adjust settings to make everything just the way you want it.

## 💫 Features

- Easy to use: Effortlessly implement size scaling and responsive design.
- Cross-platform: Works seamlessly across multiple platforms and devices.
- Customizable scaling: Define base widths for specific dimension types (xs, sm, ... 2xl) for precise control.
- Percentage-based sizing by width or height and `PixelRatio`.
- Media query hooks: Detect dimension types and override thresholds as needed using customizable [useMediaQuery](./USAGE.md#usemediaquery-usemq) hooks.
- Written in TypeScript and fully typed.

## 📀 Installation

**Supported for React Native >= 0.60**<br/>

```sh
yarn add react-native-full-responsive

//or

npm install react-native-full-responsive --save
```

## 🚀 Quick Start

```tsx
import { Text } from 'react-native';
import { useRM, FRProvider } from 'react-native-full-responsive';
//...

const MyComponent = () => {
  const { rs } = useRM();

  const scaledValue = rs(20);

  return (
    <Text style={{ fontSize: scaledValue }}>
      My awesome responsive text!
    </Text>
  );
};

export default function App() {
  return (
    <FRProvider>
      <MyComponent />
    </FRProvider>
  );
}
```
To become more familiar with how to use methods within your function or class components, check out the provided [examples](./example/src/).

## 📚 Documentation

Explore the [usage documentation](./USAGE.md) to discover how to leverage the methods, hooks, and other features.


## 🤝 Contribution

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## 🛡️ License
 
MIT