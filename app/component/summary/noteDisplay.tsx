import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface noteDisplayProps {
  note: string;
}
export default function NoteDisplay({ note }: noteDisplayProps) {
  return (
    <View>
      <Text style={styles.headerText}> You added new notes today</Text>
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>{note}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View All Notes</Text>
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
  noteContainer: {
    borderColor: "#4663FF",
    height: 92,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 24,
  },
  noteText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
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
});
