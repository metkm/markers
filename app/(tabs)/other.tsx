import { Button, Text, View } from "react-native";
import { useMarkerStore } from "../../store/markers";

export const OtherPage = () => {
  const toggleMarkers = useMarkerStore((state) => state.toggleShow)
  const showMarkers = useMarkerStore((state) => state.show)

  return (
    <View>
      <Text>other page</Text>
      <Text>Show markers {showMarkers.toString()}</Text>

      <Button
        title="toggle markers"
        onPress={toggleMarkers}
      />
    </View>
  );
};

export default OtherPage;
