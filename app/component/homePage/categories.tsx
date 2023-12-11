import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CategoryCard from "../activityCard/categoryCard";
import ArrowRight from "../../../assets/icons/arrowRight.svg";

export default function Catergories() {
  return (
    <View>
      <Text style={styles.headerText}>Categories</Text>
      <View style={{ ...styles.cardContainer, marginTop: 12 }}>
        <CategoryCard catergory="Gross Motor" />
        <CategoryCard catergory="Communication" />
      </View>
      <View style={{ ...styles.cardContainer, marginTop: 24 }}>
        <CategoryCard catergory="Social Play" />
        <CategoryCard catergory="Vision" />
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>View More Skills</Text>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "flex-start",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 12,
    alignItems: "center",
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    marginRight: 8,
  },
});
