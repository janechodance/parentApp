import { View, StyleSheet, TouchableOpacity } from "react-native";
import Star from "../../../assets/icons/star.svg";
import FilledStar from "../../../assets/icons/filledStar.svg";

interface starsAnswerProps {
  setStarRating: (rating: number) => void;
  starRating: number;
}
export default function StarsAnswer({
  starRating,
  setStarRating,
}: starsAnswerProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setStarRating(1)}>
        {starRating >= 1 ? <FilledStar /> : <Star />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStarRating(2)}>
        {starRating >= 2 ? <FilledStar /> : <Star />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStarRating(3)}>
        {starRating >= 3 ? <FilledStar /> : <Star />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStarRating(4)}>
        {starRating >= 4 ? <FilledStar /> : <Star />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStarRating(5)}>
        {starRating >= 5 ? <FilledStar /> : <Star />}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-between",
  },
});
