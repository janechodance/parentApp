import { StyleSheet, View, Text } from "react-native";
import ActivityCardSimple from "../activityCard/activityCardSimple";

interface activityCarouselProps {
  header: string;
}
export default function ActivityCarousel({ header }: activityCarouselProps) {
  return (
    <View>
      <Text style={styles.headerText}>{header}</Text>
      <View style={styles.activityContainer}>
        <ActivityCardSimple />
        <View style={{ marginLeft: 20 }}>
          <ActivityCardSimple />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    marginBottom: 24,
    alignSelf: "flex-start",
    marginTop: 28,
  },
  activityContainer: {
    flexDirection: "row",
  },
});
