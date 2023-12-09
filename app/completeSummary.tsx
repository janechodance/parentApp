import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

export default function CompleteSummary() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text>Summary</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFCFC",
  },
  container: {
    backgroundColor: "black",
    width: 100,
    height: 100,
  },
});
