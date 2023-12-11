import { View, StyleSheet, Image } from "react-native";
import Star from "../../../assets/icons/star.svg";

export default function StarsAnswer() {
  return (
    <View style={styles.container}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-between",
  },
});
