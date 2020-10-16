import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import mapMaker from './src/images/map-maker.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion = {
          {
            latitude: -21.1694028,
            longitude: -47.7900697,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008 
          }
        }
      >
        <Marker
          icon={mapMaker}
          coordinate={{
            latitude: -21.1694028,
            longitude: -47.7900697
          }}
          calloutAnchor={{
            x: 1.7,
            y: 0.6
          }}
        >
          <Callout tooltip onPress={() => {alert('oi')}}>
            <View style={styles.calloutContainer}>
              <Text  style={styles.calloutText}>Educandário</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos econtrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {alert('criar')}}>
            <Feather name="plus" color='ffff' size={20} />
          </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center'
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#ffff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3
  },

  footerText: {
    color: '#8fa7b3'
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
})
