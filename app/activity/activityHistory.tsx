import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function ActivityHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Activity History</Text>
      <TouchableOpacity>
        <Text style={styles.moreText}>View Progress Log</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    alignSelf: "flex-end",
    marginVertical: 8,
  },
});
