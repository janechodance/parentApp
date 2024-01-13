import { View, Text, StyleSheet } from "react-native";
import ThumbUp from "../../../assets/icons/thumbUp.svg";
import ThumbDown from "../../../assets/icons/thumbDown.svg";
import ThumbsUpSelected from "../../../assets/icons/thumbUpSelected.svg";
import ThumbsDownSelected from "../../../assets/icons/thumbDownSelected.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

interface thumbUpDownProps {
  value: string;
  setValue: (value: string) => void;
}
export default function ThumbUpDown({ value, setValue }: thumbUpDownProps) {
  return (
    <View style={styles.answerContainer}>
      <TouchableOpacity
        onPress={() => setValue("yes")}
        style={styles.optionsConatiner}
      >
        {value === "yes" ? <ThumbsUpSelected /> : <ThumbUp />}
        <Text style={styles.text}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setValue("no")}
        style={styles.optionsConatiner}
      >
        {value === "no" ? <ThumbsDownSelected /> : <ThumbDown />}
        <Text style={styles.text}>No</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 16,
  },
  answerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },
  optionsConatiner: {
    alignItems: "center",
  },
});
