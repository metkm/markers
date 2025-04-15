import { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CustomMarker = memo(({ coordinate, id }: { coordinate: { latitude: number; longitude: number }; id: number }) => {
  return (
    <Marker key={id} coordinate={coordinate} tracksViewChanges={false}>
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: 'red',
        }}
      />
    </Marker>
  );
});

export default function App() {
    const markers = useMemo(() => {
    return [...Array(50).keys()].map((item) => ({
      id: item,
      coordinate: {
        latitude: 38 + item / 4,
        longitude: 16,
      },
    }));
  }, []);

  return (
    <MapView style={{ flex: 1 }}>
      {markers.map((marker) => (
        <CustomMarker key={marker.id} id={marker.id} coordinate={marker.coordinate} />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
