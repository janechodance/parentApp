import { View, Text, StyleSheet, Image } from "react-native";

export default function ThumbUpDown() {
  return (
    <View style={styles.answerContainer}>
      <View style={styles.optionsConatiner}>
        <Image source={require("../../../assets/icons/thumbsUp.png")} />
        <Text style={styles.text}>Yes</Text>
      </View>
      <View style={styles.optionsConatiner}>
        <Image source={require("../../../assets/icons/thumbsDown.png")} />
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
  },
  answerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  optionsConatiner: {
    alignItems: "center",
  },
});
