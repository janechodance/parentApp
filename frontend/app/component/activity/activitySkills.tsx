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
import { v4 as uuidv4 } from "uuid";
import { Skill } from "../../customtypes/types";

interface activitySkillsProps {
  primarySkillsIds: number[];
  secondarySkillsIds: number[];
}

export default function ActivitySkills({
  primarySkillsIds,
  secondarySkillsIds,
}: activitySkillsProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    primarySkillsIds.map((id: number) => {
      axios
        .get(`https://9d86-148-74-83-32.ngrok-free.app/skill/${id}`)
        .then((res) => {
          skills.push({ name: res.data.name, primary: true });
          skills.sort((b, a) => Number(a.primary) - Number(b.primary));
          setSkills([...skills]);
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });
    });
    secondarySkillsIds.map((id: number) => {
      axios
        .get(`https://9d86-148-74-83-32.ngrok-free.app/skill/${id}`)
        .then((res) => {
          skills.push({ name: res.data.name, primary: false });
          setSkills([...skills]);
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });
    });
  }, []);
  return skills.length !== 0 ? (
    <View>
      <View style={styles.skillsContainer}>
        <FlatList
          data={skills}
          renderItem={({ item }) => (
            <View
              style={
                item.primary
                  ? styles.skillTag
                  : { ...styles.skillTag, backgroundColor: "#FFEFE3" }
              }
            >
              <Text
                style={
                  item.primary
                    ? styles.skillText
                    : { ...styles.skillText, color: "#3350E9" }
                }
              >
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={() => uuidv4()}
          horizontal
          contentContainerStyle={styles.listContents}
        />
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
  listContents: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: "#DE8BF2",
    height: 30,
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  skillText: {
    fontFamily: "Arimo-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  skillsContainer: {
    justifyContent: "space-between",
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
