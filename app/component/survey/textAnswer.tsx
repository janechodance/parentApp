import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function TextAnswer() {
  const [text, setText] = useState("");

  return (
    <TextInput
      value={text}
      multiline
      onChangeText={(text) => setText(text)}
      style={styles.textInput}
      placeholder="You can write down things like what went well, didn't go well, what to try next time."
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 24,
    borderColor: "#4663FF",
    borderWidth: 1,
    height: 161,
    padding: 20,
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#5D5D5D",
    width: "100%",
    alignItems: "flex-start",
    borderRadius: 8,
  },
});
