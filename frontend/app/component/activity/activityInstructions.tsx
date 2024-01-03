import { View, Text, StyleSheet, FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import ActivitySteps from "./activitySteps";

export default function ActivityInstructions() {
  const steps = [
    {
      number: 1,
      step: "Decide the topic you want to sort from today (same/different, colors, shapes, sizes, categories, etc.)",
    },
    {
      number: 2,
      step: "Find items in your house that represent your selected topic",
    },
    {
      number: 3,
      step: "Place one item representing each option out on a table or in a small bin to show where the child should sort the items and provide a visual cue",
    },
    {
      number: 4,
      step: "Provide your child with the other items you collected to sort. These items could be in a small bin mixed up or handed to the child one by one",
    },
  ];

  return (
    <View>
      <Text style={styles.header}>Instructions</Text>
      <FlatList
        key={uuidv4()}
        data={steps}
        renderItem={({ item }) => (
          <View style={styles.stepContainer}>
            <ActivitySteps step={item.step} number={item.number} />
          </View>
        )}
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
  stepContainer: {
    marginTop: 42,
  },
});
