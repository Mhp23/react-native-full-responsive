import * as React from 'react';
import {
  FRProvider,
  withMediaQuery,
  type DeviceType,
} from 'react-native-full-responsive';
import {StyleSheet, View, Text} from 'react-native';

class Component extends React.Component<{
  type: DeviceType;
}> {
  render(): React.ReactNode {
    const {type} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textBold}>Dimensions type is: "{type}"</Text>
      </View>
    );
  }
}

const MyComponent = withMediaQuery(Component);

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
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
