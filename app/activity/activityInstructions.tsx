import { View, Text, StyleSheet, FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import ActivitySteps from "./activitySteps";

export default function ActivityInstructions() {
  const steps = [
    "Decide the topic you want to sort from today (same/different, colors, shapes, sizes, categories, etc.)",
    "Find items in your house that represent your selected topic",
    "Place one item representing each option out on a table or in a small bin to show where the child should sort the items and provide a visual cue",
    "Provide your child with the other items you collected to sort. These items could be in a small bin mixed up or handed to the child one by one",
  ];
  return (
    <View>
      <Text style={styles.header}>Instructions</Text>
      <FlatList
        key={uuidv4()}
        data={steps}
        renderItem={({ item }) => <Text>{item}</Text>}
        scrollEnabled={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    alignSelf: "flex-start",
  },
});
