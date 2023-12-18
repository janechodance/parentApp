import { StyleSheet, View, Text } from "react-native";
import ActivityCardSimple from "../activityCard/activityCardSimple";
import Carousel from "react-native-snap-carousel";

interface activityCarouselProps {
  header: string;
}
export default function ActivityCarousel({ header }: activityCarouselProps) {
  const activities = [1, 2, 3, 4, 5];
  return (
    <View>
      <Text style={styles.headerText}>{header}</Text>
      <Carousel
        data={activities}
        renderItem={() => <ActivityCardSimple />}
        itemWidth={200}
        sliderWidth={320}
        vertical={false}
        layout="default"
        activeSlideAlignment="start"
        inactiveSlideScale={1}
      />
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
