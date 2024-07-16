import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Pagination from "../../../assets/icons/pagination.svg";

export default function ImageDisplay() {
  return (
    <View>
      <Text style={styles.headerText}> You added new images today</Text>
      <Image
        style={styles.videoContainer}
        source={require("../../../assets/activities/summaryImage.png")}
      />
      <View style={styles.pagination}>
        <Pagination />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View All Images</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
  buttonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    borderColor: "#3350E9",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 8,
    marginTop: 20,
  },
  videoContainer: {
    width: "100%",
    resizeMode: "cover",
    marginTop: 13,
  },
  pagination: {
    marginTop: 8,
    alignSelf: "center",
  },
});
