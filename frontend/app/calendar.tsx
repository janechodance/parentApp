import { StyleSheet, View, Text, ScrollView } from "react-native";

export default function Calendar() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Calendar</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    width: 343,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    marginBottom: 24,
    alignSelf: "flex-start",
    marginTop: 28,
  },
});
