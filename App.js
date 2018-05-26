import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude: -8.401274599999999,
          longitude: 114.61107449999997
        },
        title:"Pura Purancak",
        description:"Pura Purancak"
      },
      {
        key:2,
        latlng: {
          latitude: -8.483784499999999,
          longitude: 115.42695019999996
        },
        title:"Pura Rambutsiwi",
        description:"Pura Rambutsiwi"
      },
      {
        key:3,
        latlng: {
          latitude: -8.1337717,
          longitude: 114.44758750000005
        },
        title:"Pura Prapat Agung",
        description:"Pura Prapat Agung "
      }
      ,
      {
        key:4,
        latlng: {
          latitude: -8.1456786,
          longitude: 114.68033279999997
        },
        title:"Pura Pulaki",
        description:"Pura Pulaki"
      }
      ,
      {
        key:5,
        latlng: {
          latitude: -8.1834194,
          longitude: 115.04797819999999
        },
        title:"Pura di Kayuputih Buleleng",
        description:"Pura di Kayuputih Buleleng"
      },
      {
        key:6,
        latlng: {
          latitude: -8.6005143,
          longitude: 115.10615159999998
        },
        title:"Pura Pakendungan",
        description:"Pura Pakendungan"
      },
      {
        key:7,
        latlng: {
          latitude: -8.5664047,
          longitude: 115.42022859999997
        },
        title:"Pura Dalem Gandamayu",
        description:"Pura Dalem Gandamayu"
      },
      {
        key:8,
        latlng: {
          latitude: -8.5468114,
          longitude: 115.40967610000007
        },
        title:"Pura Puseh di Desa Kamasan",
        description:"Pura Puseh di Desa Kamasan"
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Beberapa Pura-Pura Dang Kayangan
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
