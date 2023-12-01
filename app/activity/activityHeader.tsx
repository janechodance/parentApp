import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ActivityHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Color Sorting</Text>
        <Image source={require("../../assets/icons/star.png")} />
      </View>
      <View style={styles.details}>
        <Text style={styles.timeHeaderText}>Time Estimate:</Text>
        <Text>15 minutes</Text>
        <Text>
          With a variety of options and almost limitless possibilities, this
          activity can be easily changed to work on different concepts and
          levels of difficulty.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    marginRight: 12,
  },
  details: {
    marginVertical: 20,
  },
  timeHeaderText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
});
