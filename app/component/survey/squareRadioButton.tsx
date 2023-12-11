import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SquareRadio from "../../../assets/icons/squareRadioButton.svg";

interface squareRadioProps {
  option: string;
}
export default function SquareRadioButton({ option }: squareRadioProps) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <SquareRadio />
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
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
    marginLeft: 10,
  },
});
