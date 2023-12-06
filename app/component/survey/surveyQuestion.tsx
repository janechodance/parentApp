import { View, Text, StyleSheet } from "react-native";
import ThumbUpDown from "./thumbUpDown";
interface surveyQuestionProps {
  question: string;
  answer: React.ReactNode;
}
export default function SurveyQuestion({
  question,
  answer,
}: surveyQuestionProps) {
  return (
    <View>
      <Text style={styles.headerText}>{question}</Text>
      {answer}
    </View>
  );
}
const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
});
