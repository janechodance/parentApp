import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Caret from "../../../assets/icons/caret.svg";

interface skillAnswerProps {
  skill: string;
  setSkill: (skill: string) => void;
}
export default function SkillAnswer({ skill, setSkill }: skillAnswerProps) {
  return (
    <>
      <View style={styles.skillButtonContainer}>
        <TouchableOpacity
          onPress={() => setSkill("gross_motor")}
          style={
            skill === "gross_motor"
              ? { ...styles.skillButton, backgroundColor: "#3350E9" }
              : styles.skillButton
          }
        >
          <Text
            style={
              skill === "gross_motor"
                ? { ...styles.skillsButtonText, color: "white" }
                : styles.skillsButtonText
            }
          >
            Gross Motor
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSkill("fine_motor")}
          style={
            skill === "fine_motor"
              ? { ...styles.skillButton, backgroundColor: "#3350E9" }
              : styles.skillButton
          }
        >
          <Text
            style={
              skill === "fine_motor"
                ? { ...styles.skillsButtonText, color: "white" }
                : styles.skillsButtonText
            }
          >
            Fine Motor
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skillButtonContainer}>
        <TouchableOpacity
          onPress={() => setSkill("communication")}
          style={
            skill === "communication"
              ? { ...styles.skillButton, backgroundColor: "#3350E9" }
              : styles.skillButton
          }
        >
          <Text
            style={
              skill === "communication"
                ? { ...styles.skillsButtonText, color: "white" }
                : styles.skillsButtonText
            }
          >
            Communication
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSkill("social_play")}
          style={
            skill === "social_play"
              ? { ...styles.skillButton, backgroundColor: "#3350E9" }
              : styles.skillButton
          }
        >
          <Text
            style={
              skill === "social_play"
                ? { ...styles.skillsButtonText, color: "white" }
                : styles.skillsButtonText
            }
          >
            Social Play
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skillButtonContainer}>
        <TouchableOpacity
          onPress={() => setSkill("adl")}
          style={
            skill === "adl"
              ? { ...styles.skillButton, backgroundColor: "#3350E9" }
              : styles.skillButton
          }
        >
          <Text
            style={
              skill === "adl"
                ? { ...styles.skillsButtonText, color: "white" }
                : styles.skillsButtonText
            }
          >
            Daily Living Skills
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSkill("flexible")}
          style={
            skill === "flexible"
              ? { ...styles.skillButton, backgroundColor: "#3350E9" }
              : styles.skillButton
          }
        >
          <Text
            style={
              skill === "flexible"
                ? { ...styles.skillsButtonText, color: "white" }
                : styles.skillsButtonText
            }
          >
            I'm Flexible
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>View More Skills</Text>
        <Caret />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  skillsButtonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  skillButton: {
    borderColor: "#3350E9",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    width: 158,
    height: 48,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  skillButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
  },
  moreButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    marginRight: 8,
  },
});
