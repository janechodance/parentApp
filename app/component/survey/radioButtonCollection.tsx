import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CircleRadio from "../../../assets/icons/circleRadioButton.svg";
import RadionButtonSelected from "../../../assets/icons/radioButtonChecked.svg";

interface radioCollectionProps {
  options: string[];
  timeSelected: number;
  setTimeSelected: (time: number) => void;
}
export default function RadioButtonCollection({
  options,
  timeSelected,
  setTimeSelected,
}: radioCollectionProps) {
  return (
    <View>
      <FlatList
        data={options}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => setTimeSelected(index)}
              style={styles.container}
            >
              {index === timeSelected ? (
                <RadionButtonSelected />
              ) : (
                <CircleRadio />
              )}
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 24,
  },
  optionText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 12,
  },
});
