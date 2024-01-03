import { View, Text, StyleSheet } from "react-native";
import Line from "../../../assets/icons/Line.svg";
import Activity from "../../../assets/icons/activity.svg";
import Toolbox from "../../../assets/icons/toolbox.svg";

interface progressDisplayProps {
  complete: boolean;
}
export default function ProgressDisplay({ complete }: progressDisplayProps) {
  return (
    <View>
      <Text style={styles.headerText}>My Progress</Text>
      {complete ? (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.icons}>
              <Line />
            </View>
            <View style={styles.icons}>
              <Activity />
            </View>
            <Text style={styles.progressText}>
              You have completed 2 of 4 activities this week!
            </Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.icons}>
              <Line />
            </View>
            <View style={styles.icons}>
              <Toolbox />
            </View>
            <Text style={styles.progressText}>
              You incorporated the AAC device into this activity!
            </Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.icons}>
              <Line />
            </View>
            <View style={styles.icons}>
              <Activity />
            </View>
            <Text style={styles.progressText}>
              You have practiced 3 activities this week!
            </Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.icons}>
              <Line />
            </View>
            <View style={styles.icons}>
              <Toolbox />
            </View>
            <Text style={styles.progressText}>
              You incorporated the AAC device into this activity!
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
  progressContainer: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "#ECEFFF",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  progressText: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
    lineHeight: 21,
    width: 286,
  },
  icons: {
    marginRight: 8,
  },
});
