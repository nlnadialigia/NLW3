import React, { useCallback, useEffect, useState } from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import mapMaker from "../images/map-maker.png"
import { RectButton } from "react-native-gesture-handler"
import api from "../services/api"

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      api.get('orphanages').then(response => {
        setOrphanages(response.data)
      })
    }, [])
  )

  function handleNavigateToOrphanageDetails(id:number) {
    navigation.navigate("OrphanageDetails", {id})
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate("SelectedMapPosition")
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -21.1694028,
          longitude: -47.7900697,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
      
      {orphanages.map(orphanage => {
        return (
          <Marker
          key={orphanage.id}
          icon={mapMaker}
          coordinate={{
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
          }}
          calloutAnchor={{
            x: 1.7,
            y: 0.6,
          }}
        >
          <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>{orphanage.name}</Text>
            </View>
          </Callout>
        </Marker>
        )
      })}

      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} orfanatos econtrados</Text>
        <RectButton
          style={styles.createOrphanageButton}
          onPress={handleNavigateToCreateOrphanage}
        >
          <Feather name="plus" color="#fff" size={20} />
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    fontFamily: "Nunito_700Bold",
    color: "#0089a5",
    fontSize: 14,
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  footerText: {
    fontFamily: "Nunito_700Bold",
    color: "#8fa7b3",
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})
