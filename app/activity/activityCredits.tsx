import { View, Text, StyleSheet } from "react-native";

export default function ActivityCredit() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Posted by Sarah, caregiver {"\n"}Reviewed by Tim, occupational therapist
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
    borderTopColor: "#D1D1D1",
    borderTopWidth: 1,
    paddingVertical: 22,
  },
  text: {
    fontFamily: "Arimo-Italic",
    fontSize: 16,
    lineHeight: 24,
  },
});
