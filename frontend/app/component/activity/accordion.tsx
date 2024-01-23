import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Caret from "../../../assets/icons/caret.svg";
import CaretUp from "../../../assets/icons/caretUp.svg";

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
    <View style={isOpen ? styles.containerOpened : styles.container}>
      <Text style={styles.text}>{header}</Text>
      <TouchableOpacity style={styles.caret} onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? <CaretUp /> : <Caret />}
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
  containerOpened: {
    flexDirection: "row",
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
