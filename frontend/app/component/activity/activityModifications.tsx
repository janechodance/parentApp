import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface activityModificationsProp {
  modifications: string[];
}
export default function ActivityModifications({
  modifications,
}: activityModificationsProp) {
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
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  itemText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
});
