import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FRProvider, createRStyle } from 'react-native-full-responsive';

const SIZE = 20;

const Box: React.FC = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.textBold}>without react-native-full-responsive</Text>
    </View>
  );
};

const ResponsiveBox: React.FC = () => {
  return (
    <View style={rStyles.box}>
      <Text style={rStyles.textBold}>with react-native-full-responsive</Text>
    </View>
  );
};

export default function App() {
  return (
    <FRProvider type="sm">
      <View style={styles.container}>
        <Box />
        <ResponsiveBox />
      </View>
    </FRProvider>
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
    paddingHorizontal: SIZE / 2,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: SIZE,
  },
});

const rStyles = createRStyle({
  box: {
    height: `${SIZE * 3}rs`,
    justifyContent: 'center',
    backgroundColor: 'yellow',
    marginVertical: `${SIZE}rs`,
    paddingHorizontal: `${SIZE / 2}rs`,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: `${SIZE}rs`,
  },
});
