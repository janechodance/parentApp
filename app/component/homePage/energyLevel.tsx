import { StyleSheet, View, Text, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import ProgressBarCircle from "../../../assets/icons/progressBarCircle.svg";
import { useState } from "react";

export default function EnergyLevel() {
  const [level, setLevel] = useState(0.37);
  return (
    <View>
      <Image
        style={{ alignSelf: "center" }}
        source={require("../../../assets/background/plant.png")}
      />
      <Text style={styles.headerText}>How is your energy level today?</Text>
      <ProgressBar
        progress={level}
        color={"#2563EB"}
        style={styles.progressBar}
      />

      <ProgressBarCircle
        style={{ ...styles.progressBarCircle, left: 314 * level }}
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
  },
  progressBar: {
    width: 314,
    height: 8,
    marginTop: 16,
    backgroundColor: "#F3F4F6",
    borderRadius: 100,
  },
  progressBarCircle: {
    top: -12,
  },
  progressBarNumberContainer: {
    flexDirection: "row",
    width: 314,
    justifyContent: "space-between",
    marginTop: -10,
  },
  progressBarNumber: {
    fontFamily: "Arimo-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
});
