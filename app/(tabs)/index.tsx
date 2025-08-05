import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useMarkerStore } from "../../store/markers";

const CustomMarker = () => {
  return (
    <Marker
      // Have to move this or marker doesn't show up on first app open
      tracksViewChanges={false}
      coordinate={{
        latitude: 0,
        longitude: 0,
      }}
    >
      <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
    </Marker>
  );
};

const Markers = () => {
  const showMarkers = useMarkerStore((state) => state.show)

  if (!showMarkers) {
    return
  }

  return (
    <CustomMarker />
  )
}

const ToggleMarkers = () => {
  const toggleMarkers = useMarkerStore((state) => state.toggleShow)

  return (
    <Button
      title="toggle"
      onPress={toggleMarkers}
    />
  )
}

export const Home = () => {
  return (
    <View style={styles.container}>
      <ToggleMarkers />

      <MapView style={{ flex: 1 }}>
        <Markers />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default Home
