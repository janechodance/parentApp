import { View, Text, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
export default function ActivityModifications() {
  const modifications = [
    "Start the activity with 2 options (red and blue or big and small) but to make the activity more challenging, add additional categories or increase the amount and types of objects they are sorting",
    "For more fine motor practice, have your child use tweezers to pick up and place items into categories",
    "To practice social play, have children pass items and take turns to practice waiting, sharing, and praising each other.",
    "Remember, it is helpful to verbally say colors and other short phrases like “more” “same” and “all done” to model communication and vocabulary. You can also do this on your child’s AAC device if applicable or have them find the color or item they are sorting that day.",
  ];
  return (
    <View style={styles.container}>
      <FlatList
        key={uuidv4()}
        data={modifications}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{`\u2022 ${item}`}</Text>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    backgroundColor: "#ECEFFF",
    padding: 16,
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  itemText: {
    fontFamily: "Arimo-Regular",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 28,
  },
});
