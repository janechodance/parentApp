import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import TrackMark from "../../../assets/icons/trackMark.svg";

export default function ScaleAnswer() {
  const [level, setLevel] = useState(0);
  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={10}
        step={1}
        maximumTrackTintColor="#F3F4F6"
        minimumTrackTintColor="#2563EB"
        thumbTintColor="#2563EB"
        trackStyle={{ height: 8, borderRadius: 100, width: 287 }}
        renderTrackMarkComponent={() => <TrackMark />}
        trackMarks={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        onValueChange={(value) => setLevel(value[0])}
        value={level}
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
  levelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 287,
    marginTop: 8,
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
