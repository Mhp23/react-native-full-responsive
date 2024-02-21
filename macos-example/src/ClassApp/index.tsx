import * as React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {
  withRM,
  FRProvider,
  type ResponsiveMethodsProps,
} from 'react-native-full-responsive';

const SIZE = 20;

class Component extends React.Component<ResponsiveMethodsProps> {
  render(): React.ReactNode {
    const {rs} = this.props;

    const scaledValue = rs(SIZE);

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={[styles.textBold, {fontSize: SIZE}]}>
            without react-native-full-responsive
          </Text>
        </View>
        <View
          style={[
            styles.responsiveBox,
            {
              height: scaledValue * 3,
              marginVertical: scaledValue,
              paddingHorizontal: scaledValue / 2,
            },
          ]}>
          <Text style={[styles.textBold, {fontSize: scaledValue}]}>
            with react-native-full-responsive
          </Text>
        </View>
      </View>
    );
  }
}

const MyComponent = withRM(Component);

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <FRProvider type="sm">
        <MyComponent />
      </FRProvider>
    );
  }
}

export default App;

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
