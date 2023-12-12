import { router } from "expo-router";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import ArrowLeft from "../../../assets/icons/arrowLeft.svg";

export default function HeaderWithNotes() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <ArrowLeft />
      </TouchableOpacity>
      <TouchableOpacity style={styles.notesButton}>
        <Text style={styles.notesButtonText}>Notes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
