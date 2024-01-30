import { View, Text, StyleSheet, FlatList } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface activityMaterialsProp {
  materialDescription: string;
  materials: string[];
}

export default function ActivityMaterials({
  materialDescription,
  materials,
}: activityMaterialsProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{materialDescription}</Text>
      <FlatList
        key={uuidv4()}
        data={materials}
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
