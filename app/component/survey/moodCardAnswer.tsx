import { View, StyleSheet } from "react-native";
import MoodCardGood from "../../../assets/moodCardGood.svg";

export default function MoodCardAnswer() {
  return (
    <View style={styles.screenImage}>
      <MoodCardGood />
    </View>
  );
}

const styles = StyleSheet.create({
  screenImage: {
    alignSelf: "center",
  },
});
