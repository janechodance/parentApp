import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface accordionProp {
  header: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function Accordion({
  isOpen,
  header,
  setIsOpen,
}: accordionProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{header}</Text>
      <TouchableOpacity style={styles.caret} onPress={() => setIsOpen(!isOpen)}>
        <Image
          source={
            isOpen
              ? require("../../../assets/icons/caretUp.png")
              : require("../../../assets/icons/caret.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 8,
  },
  caret: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
    bottom: 8,
  },
});
