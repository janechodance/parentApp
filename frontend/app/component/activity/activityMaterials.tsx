import { View, Text, StyleSheet, FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function ActivityMaterials() {
  const items = [
    "Crayons or Markers",
    "Pom Poms, Feathers, Buttons",
    "Blocks",
    "Socks or Clothing Items",
    "Books",
    "AAC device (optional)",
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        To do this activity, you need items with solid colors. The items below
        are examples of items you can use.
      </Text>
      <FlatList
        key={uuidv4()}
        data={items}
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
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  header: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    alignSelf: "flex-start",
  },
  description: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#5D5D5D",
    marginTop: 8,
    marginBottom: 24,
  },
  itemText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 40,
    color: "#292524",
  },
});
