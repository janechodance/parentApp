import { StyleSheet, View, Text, Image } from "react-native";
import { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";

export default function EnergyLevel() {
  const [level, setLevel] = useState(50);
  return (
    <View>
      <Image
        style={{
          alignSelf: "center",
          width: 342,
          height: 264,
          resizeMode: "contain",
        }}
        source={require("../../../assets/background/plant.png")}
      />
      <Text style={styles.headerText}>How is your energy level today?</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        maximumTrackTintColor="#F3F4F6"
        minimumTrackTintColor="#2563EB"
        thumbTintColor="#2563EB"
        trackStyle={{ height: 8, borderRadius: 100, width: 314 }}
        onValueChange={(value) => setLevel(value[0])}
        value={level}
        containerStyle={{ width: 314 }}
      />

      <View style={styles.progressBarNumberContainer}>
        <Text style={styles.progressBarNumber}>0%</Text>
        <Text style={styles.progressBarNumber}>25%</Text>
        <Text style={styles.progressBarNumber}>50%</Text>
        <Text style={styles.progressBarNumber}>75%</Text>
        <Text style={styles.progressBarNumber}>100%</Text>
      </View>
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
    marginBottom: 16,
  },
  progressBarNumberContainer: {
    flexDirection: "row",
    width: 330,
    justifyContent: "space-between",
  },
  progressBarNumber: {
    fontFamily: "Arimo-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
});
