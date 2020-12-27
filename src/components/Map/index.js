import React, {Component} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import io from 'socket.io-client';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  componentDidMount() {
    this.socket = io('http://192.168.3.109:3001');
    this.socket.on('updateData', (data) => {
      this.alterarRota(data);
    });
  }

  alterarRota = ({latitude, longitude}) => {
    this.setState({latitude, longitude});
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            title={'Ponto de início'}
            description={'Descrição'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  map: {flex: 1, height: '100%', width: '100%'},
  button: {
    margin: 20,
    marginRight: 30,
    color: 'red',
    backgroundColor: 'white',
  },
});
