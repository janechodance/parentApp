import { StyleSheet, View, Text, Image } from "react-native";
export default function EnergyLevel() {
  return (
    <View>
      <Image
        style={{ alignSelf: "center" }}
        source={require("../../../assets/background/plant.png")}
      />
      <Text style={styles.headerText}>How is your energy level today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "flex-start",
    marginTop: 40,
  },
});
