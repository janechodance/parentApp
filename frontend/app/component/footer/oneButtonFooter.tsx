import { Link, router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface oneButtonFooterProps {
  buttonText: string;
  buttonTo: string;
  activityId?: number;
  submitFunction?: () => void;
}
export default function OneButtonFooter({
  buttonText,
  buttonTo,
  activityId,
  submitFunction,
}: oneButtonFooterProps) {
  return (
    <Link
      href={{
        pathname: buttonTo,
        params: { activityId: activityId },
      }}
      onPress={submitFunction ? () => submitFunction : undefined}
    >
      <View style={styles.footerContainer}>
        <View style={styles.submitButton}>
          <Text style={styles.text}>{buttonText}</Text>
        </View>
      </View>
    </Link>
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
