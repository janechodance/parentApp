import { View, Text, StyleSheet } from "react-native";

interface stepsProps {
  number: number;
  step: string;
}
export default function ActivitySteps({ step, number }: stepsProps) {
  return (
    <View>
      <Text style={styles.header}>Step {number}</Text>
      <Text style={styles.text}>{step}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
  text: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
});
