import { FlatList, View, Text, StyleSheet } from "react-native";
import SquareRadioButton from "./squareRadioButton";
import CircleRadioButton from "./circleRadioButton";

interface radioCollectionProps {
  options: string[];
  style: string;
}
export default function RadioButtonCollection({
  options,
  style,
}: radioCollectionProps) {
  return (
    <View>
      {style === "square" ? (
        <Text style={styles.subText}>Select all that apply</Text>
      ) : null}
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <View>
            {style === "square" ? (
              <SquareRadioButton option={item} />
            ) : (
              <CircleRadioButton option={item} />
            )}
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
});
