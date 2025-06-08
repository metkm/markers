import { memo, useMemo, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const markers = [...Array(50).keys()].map((item) => ({
  id: item,
  coordinate: {
    latitude: 38 + item / 4,
    longitude: 16,
  },
}));

// const CustomMarker = memo(
//   ({ coordinate, id }: { coordinate: { latitude: number; longitude: number }; id: number }) => {
//     return (
//       <Marker key={id} coordinate={coordinate} tracksViewChanges={false}>
//         <View
//           style={{
//             width: 10,
//             height: 10,
//             backgroundColor: "red",
//           }}
//         />
//       </Marker>
//     );
//   }
// );

export default function App() {
  const [showMarkers, setShowMarkers] = useState(false);

  return (
    <>
      <Button title="Toggle Markers" onPress={() => setShowMarkers((show) => !show)} />

      <MapView style={{ flex: 1 }}>
        {showMarkers && (
          markers.map((marker) => (
          <Marker key={marker.id} coordinate={marker.coordinate} tracksViewChanges={false}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "red",
              }}
            />
          </Marker>
          ))
        )}
      </MapView>
    </>
  );
}
