import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActivityImage2 from "../../../assets/background/activityImage2.svg";

interface categoryCardProps {
  catergory: string;
}

export default function CategoryCard({ catergory }: categoryCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.background}>
        <ActivityImage2 />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{catergory}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 157,
    borderRadius: 8,
    backgroundColor: "#FFFCFC",
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  background: {
    width: "100%",
    height: 147,
    backgroundColor: "#B8DE1F",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  contentContainer: {
    padding: 16,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    alignSelf: "flex-start",
  },
});
