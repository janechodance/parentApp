import { View, Text, StyleSheet, Image } from "react-native";
import ActivityImage2 from "../../../assets/background/activityImage2.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function ActivityCardSimple() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ActivityImage2 />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Activity</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 182,
    borderRadius: 8,
    marginBottom: 32,
    backgroundColor: "#FFFCFC",
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  background: {
    width: "100%",
    height: 147,
    backgroundColor: "#FFE2CD",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  contentContainer: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    alignSelf: "flex-start",
  },
  descriptionText: {
    fontFamily: "Arimo-Regular",
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    backgroundColor: "#3350E9",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 93,
    marginVertical: 16,
  },
  buttonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFF",
  },
});
