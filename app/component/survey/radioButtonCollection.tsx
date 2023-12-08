import { FlatList, View } from "react-native";
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
  );
}
