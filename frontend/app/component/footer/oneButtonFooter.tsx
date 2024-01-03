import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface oneButtonFooterProps {
  buttonText: string;
  buttonTo: string;
}
export default function OneButtonFooter({
  buttonText,
  buttonTo,
}: oneButtonFooterProps) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={() => router.push(buttonTo)}
        style={styles.submitButton}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submitButton: {
    width: 343,
    backgroundColor: "#3350E9",
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
});
