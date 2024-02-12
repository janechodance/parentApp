import { View, Text, StyleSheet } from "react-native";

interface activityCreditsProps {
  postedBy: string;
  reviewedBy: string;
}

export default function ActivityCredit({
  postedBy,
  reviewedBy,
}: activityCreditsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Posted by {postedBy} {"\n"}
        Reviewed by {reviewedBy}
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
