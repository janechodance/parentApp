import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CaretRight from "../../../assets/icons/caretRight.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface activitySkillsProps {
  primarySkillsIds: number[];
  secondarySkillsIds: number[];
}

export default function ActivitySkills({
  primarySkillsIds,
}: activitySkillsProps) {
  const [skills, setSkills] = useState<string[]>([]);
  useEffect(() => {
    primarySkillsIds.map((id: number) => {
      axios
        .get(`https://f017-37-19-220-197.ngrok-free.app/skill/${id}`)
        .then((res) => {
          skills.push(res.data.name);
          setSkills([...skills]);
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });
    });
  }, []);
  console.log(skills);
  return skills.length !== 0 ? (
    <View style={styles.container}>
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
        {/* <FlatList
          data={primarySkills}
          renderItem={({ item }) => (
            <View style={{ ...styles.skillTag, backgroundColor: "#FFEFE3" }}>
              <Text style={{ ...styles.skillText, color: "#3350E9" }}>
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item}
          horizontal
        /> */}
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>View More Tags</Text>
        <CaretRight />
      </TouchableOpacity>
    </View>
  ) : (
    <ActivityIndicator />
  );
}

const styles = StyleSheet.create({
  container: {},
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
