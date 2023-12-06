import { View, Text, StyleSheet, Image } from "react-native";

export default function ActivityImages() {
  return (
    <View>
      <Text style={styles.headerText}>Videos:</Text>
      <Image
        style={styles.videoContainer}
        source={require("../../assets/activities/colorSorting.png")}
      />
      <Text style={styles.captionText}>Video example of Color Sorting</Text>
      <Text style={styles.headerText}>Modifications:</Text>
      <Image
        style={styles.videoContainer}
        source={require("../../assets/activities/colorSortingModifications.png")}
      />
      <Image
        style={styles.pagination}
        source={require("../../assets/icons/pagination.png")}
      />
      <Text style={styles.captionText}>
        Alternative set-ups, modifications, and item examples
      </Text>
      <Text style={styles.headerText}>Personal Images:</Text>
      <Image
        style={styles.videoContainer}
        source={require("../../assets/activities/colorSortingPersonal.png")}
      />
      <Image
        style={styles.pagination}
        source={require("../../assets/icons/pagination.png")}
      />
      <Text style={styles.captionText}>Uploaded images and videos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 36,
  },
  videoContainer: {
    height: 210,
    width: "100%",
    resizeMode: "contain",
    marginTop: 16,
  },
  captionText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    alignSelf: "center",
    marginTop: 8,
    textAlign: "center",
  },
  pagination: {
    marginTop: 8,
    alignSelf: "center",
  },
});
