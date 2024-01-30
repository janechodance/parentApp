import { View, Text, StyleSheet, FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import ActivitySteps from "./activitySteps";

interface activityInstructionsProp {
  instructions: string[];
}
export default function ActivityInstructions({
  instructions,
}: activityInstructionsProp) {
  return (
    <View style={styles.container}>
      <FlatList
        key={uuidv4()}
        data={instructions}
        renderItem={({ item, index }) => (
          <View style={styles.stepContainer}>
            <ActivitySteps step={item} number={index + 1} />
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
  container: {
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
});
