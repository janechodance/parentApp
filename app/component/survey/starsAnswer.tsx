import { View, Text, StyleSheet, Image } from "react-native";
export default function StarsAnswer() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/icons/emptyStar.png")} />
      <Image source={require("../../../assets/icons/emptyStar.png")} />
      <Image source={require("../../../assets/icons/emptyStar.png")} />
      <Image source={require("../../../assets/icons/emptyStar.png")} />
      <Image source={require("../../../assets/icons/emptyStar.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
  },
});
