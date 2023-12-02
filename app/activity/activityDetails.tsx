import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ActivityHeader from "./activityHeader";
import ActivityHistory from "./activityHistory";

export default function ActivityDetails() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.firstScreen}>
          <TouchableOpacity onPress={() => router.push("../activityResults")}>
            <Image source={require("../../assets/icons/arrowLeft.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notesButton}>
            <Text style={styles.notesButtonText}>Notes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.activityImage}
            source={require("../../assets/activities/colorSortingActivity.png")}
          />
          <Image
            style={styles.paginationIcon}
            source={require("../../assets/icons/pagination.png")}
          />
        </View>
        <ActivityHeader />
        <ActivityHistory />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFCFC",
  },
  container: {
    flex: 1,
    width: 342,
  },
  firstScreen: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  notesButton: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 242,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#3350E9",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  notesButtonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  activityImage: {
    height: 213,
    width: "100%",
    borderRadius: 8,
    marginTop: 24,
  },
  paginationIcon: {
    alignSelf: "center",
    marginTop: 10,
  },
});
