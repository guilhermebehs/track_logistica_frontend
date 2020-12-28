/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tracking from './src/screens/Tracking';

const App = () => {
  return (
    <View style={styles.container}>
      <Tracking />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bec2c4',
  },
});

export default App;
