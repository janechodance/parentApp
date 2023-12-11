import { View, Text, StyleSheet, Image } from "react-native";

export default function Quote() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/background/mountain.png")}
      />
      <Text style={styles.text}>
        “If you find it in your heart to care for somebody else, you will have
        succeeded.” {"    "}- Maya Angelou
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#703C7E",
    width: 349,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    marginTop: 28,
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFF",
    alignSelf: "stretch",
  },
  image: {
    width: 97,
    height: 55,
    alignSelf: "center",
  },
});
