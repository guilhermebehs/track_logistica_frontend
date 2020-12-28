import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Map from '../../components/Map';

export default () => {
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
