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
    height: SIZE,
    paddingVertical: SIZE,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  responsiveBox: {
    height: rh(SIZE),
    justifyContent: 'center',
    paddingVertical: rs(SIZE),
    backgroundColor: 'yellow',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
