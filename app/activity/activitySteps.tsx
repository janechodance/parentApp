import { View, Text, StyleSheet } from "react-native";

export default function ActivitySteps(step: any) {
  return (
    <View>
      <Text style={styles.header}>Step 1</Text>
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
