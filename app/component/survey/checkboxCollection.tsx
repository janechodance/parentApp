import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Checkbox from "../../../assets/icons/checkbox.svg";
import CheckboxChecked from "../../../assets/icons/checkboxChecked.svg";

interface checkboxCollectionProps {
  options: string[];
  optionsSelected: number[];
  setOptionsSelected: (option: number[]) => void;
}
export default function CheckboxCollection({
  options,
  optionsSelected,
  setOptionsSelected,
}: checkboxCollectionProps) {
  const onCheck = (index: number) => {
    if (optionsSelected.includes(index)) {
      const optionIndex = optionsSelected.indexOf(index);
      optionsSelected.splice(optionIndex, 1);
      setOptionsSelected([...optionsSelected]);
    } else {
      setOptionsSelected([...optionsSelected, index]);
    }
  };
  return (
    <View>
      <Text style={styles.subText}>Select all that apply</Text>
      <FlatList
        data={options}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => onCheck(index)}
              style={styles.container}
            >
              {optionsSelected.includes(index) ? (
                <CheckboxChecked />
              ) : (
                <Checkbox />
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
  subText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  container: {
    flexDirection: "row",
    marginTop: 24,
  },
  optionText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
  },
});
