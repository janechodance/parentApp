import { View, StyleSheet, Image } from "react-native";
export default function MoodCardAnswer() {
  return (
    <View>
      <Image
        style={styles.screenImage}
        source={require("../../../assets/moodCardGood.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenImage: {
    alignSelf: "center",
  },
});
