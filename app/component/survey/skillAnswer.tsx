import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Caret from "../../../assets/icons/caret.svg";

export default function SkillAnswer() {
  return (
    <>
      <View style={styles.skillButtonContainer}>
        <TouchableOpacity style={styles.skillButton}>
          <Text style={styles.skillsButtonText}>Gross Motor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skillButton}>
          <Text style={styles.skillsButtonText}>Fine Motor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skillButtonContainer}>
        <TouchableOpacity style={styles.skillButton}>
          <Text style={styles.skillsButtonText}>Communication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skillButton}>
          <Text style={styles.skillsButtonText}>Social Play</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skillButtonContainer}>
        <TouchableOpacity style={styles.skillButton}>
          <Text style={styles.skillsButtonText}>Daily Living Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skillButton}>
          <Text style={styles.skillsButtonText}>I'm Flexible</Text>
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
