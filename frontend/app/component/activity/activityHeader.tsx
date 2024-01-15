import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SolidStar from "../../../assets/icons/solidStar.svg";
import CaretRight from "../../../assets/icons/caretRight.svg";

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
  const skills = ["Cognitive Skills", "Fine Motor Skills", "Life Skills"];
  const skills2 = ["Communication", "Problem Solving", "AAC"];
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
          <Text style={styles.timeHeaderText}>Active Time:</Text>
          <Text style={{ ...styles.timeText, marginLeft: 4, marginBottom: 1 }}>
            {active_time} minutes
          </Text>
        </View>
        <Text style={styles.timeText}>{description}</Text>
      </View>
      <View style={styles.skillsContainer}>
        <FlatList
          data={skills}
          renderItem={({ item }) => (
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
          horizontal
        />
        <FlatList
          data={skills2}
          renderItem={({ item }) => (
            <View style={{ ...styles.skillTag, backgroundColor: "#FFEFE3" }}>
              <Text style={{ ...styles.skillText, color: "#3350E9" }}>
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>View More Tags</Text>
        <CaretRight />
      </TouchableOpacity>
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
  skillTag: {
    backgroundColor: "#DE8BF2",
    height: 30,
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  skillText: {
    fontFamily: "Arimo-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  skillsContainer: {
    justifyContent: "space-between",
    height: 92,
  },
  moreButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 16,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
  },
});
