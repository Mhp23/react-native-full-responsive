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
