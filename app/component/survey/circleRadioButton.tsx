import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface circleRadioProps {
  option: string;
}
export default function CircleRadioButton({ option }: circleRadioProps) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image source={require("../../../assets/icons/radioButton.png")} />
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
    marginLeft: 8,
  },
});
