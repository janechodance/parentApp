import { StyleSheet, View, Text } from "react-native";
import WeekCircle from "../../../assets/icons/weekCircle.svg";
import Flame from "../../../assets/icons/flame.svg";
export default function WeekReview() {
  return (
    <View>
      <Text style={styles.headerText}>Your Week in Review</Text>
      <View style={styles.weekContainer}>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Flame style={{ position: "absolute", top: 8, left: 8 }} />
          <Text style={styles.weekText}>M</Text>
        </View>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Text style={styles.weekText}>T</Text>
        </View>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Text style={styles.weekText}>W</Text>
        </View>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Flame style={{ position: "absolute", top: 8, left: 8 }} />
          <Text style={styles.weekText}>Th</Text>
        </View>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Flame style={{ position: "absolute", top: 8, left: 8 }} />
          <Text style={styles.weekText}>F</Text>
        </View>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Text style={styles.weekText}>Sa</Text>
        </View>
        <View style={styles.dayContainer}>
          <WeekCircle />
          <Text style={styles.weekText}>Su</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayContainer: {
    alignItems: "center",
  },
  weekText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
});
