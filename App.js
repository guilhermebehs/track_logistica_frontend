/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Map from './src/components/Map';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Mapa</Text>
      </View>
      <View style={styles.map}>
        <Map />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bec2c4',
  },
  title: {
    flex: 1,
  },
  map: {
    flex: 19,
  },
});

export default App;
