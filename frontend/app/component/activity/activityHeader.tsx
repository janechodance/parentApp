import { View, Text, StyleSheet } from "react-native";
import SolidStar from "../../../assets/icons/solidStar.svg";

interface activityHeaderProps {
  name: string;
  setup_time: number;
  active_time: number;
  description: string;
}

export default function ActivityHeader({
  name,
  setup_time,
  active_time,
  description,
}: activityHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <SolidStar />
      </View>
      <View style={styles.details}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeHeaderText}>Setup Time:</Text>
          <Text style={{ ...styles.timeText, marginLeft: 4, marginBottom: 1 }}>
            {setup_time} minutes
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeHeaderText}>Active Time:</Text>
          <Text style={{ ...styles.timeText, marginLeft: 4, marginBottom: 1 }}>
            {active_time} minutes
          </Text>
        </View>
        <Text style={styles.timeText}>{description}</Text>
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
  timeText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 30,
  },
});
