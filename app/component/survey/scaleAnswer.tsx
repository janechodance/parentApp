import { View, Text, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import ProgressBarCircle from "../../../assets/icons/progressBarCircle.svg";
import { useState } from "react";
export default function ScaleAnswer() {
  const [level, setLevel] = useState(0.5);
  return (
    <View style={styles.container}>
      <ProgressBar
        progress={level}
        color={"#2563EB"}
        style={styles.progressBar}
      />
      <ProgressBarCircle
        style={{ ...styles.progressBarCircle, left: 287 * level }}
      />
      <View style={styles.levelContainer}>
        <Text style={styles.levelNumberText}>0</Text>
        <Text style={styles.levelNumberText}>1</Text>
        <Text style={styles.levelNumberText}>2</Text>
        <Text style={styles.levelNumberText}>3</Text>
        <Text style={styles.levelNumberText}>4</Text>
        <Text style={styles.levelNumberText}>5</Text>
        <Text style={styles.levelNumberText}>6</Text>
        <Text style={styles.levelNumberText}>7</Text>
        <Text style={styles.levelNumberText}>8</Text>
        <Text style={styles.levelNumberText}>9</Text>
        <Text style={styles.levelNumberText}>10</Text>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Easy</Text>
        <Text style={styles.levelText}>Difficult</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignSelf: "center",
  },
  progressBar: {
    width: 287,
    height: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 100,
    alignSelf: "flex-start",
  },
  progressBarCircle: {
    top: -12,
  },
  levelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 304,
  },
  levelNumberText: {
    fontFamily: "Arimo-Regular",
    fontSize: 18,
    lineHeight: 28,
  },
  levelText: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
    lineHeight: 21,
  },
});
