import { View, Text, StyleSheet } from "react-native";
import ThumbUp from "../../../assets/icons/thumbUp.svg";
import ThumbDown from "../../../assets/icons/thumbDown.svg";

export default function ThumbUpDown() {
  return (
    <View style={styles.answerContainer}>
      <View style={styles.optionsConatiner}>
        <ThumbUp />
        <Text style={styles.text}>Yes</Text>
      </View>
      <View style={styles.optionsConatiner}>
        <ThumbDown />
        <Text style={styles.text}>No</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 16,
  },
  answerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },
  optionsConatiner: {
    alignItems: "center",
  },
});
