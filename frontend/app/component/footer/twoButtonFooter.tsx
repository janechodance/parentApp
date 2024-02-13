import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface twoButtonFooterProps {
  height: number;
  width: number;
  buttonLeftText: string;
  buttonRightText: string;
  buttonLeftTo: string;
  buttonRightTo: string;
  onPress?: () => void;
}
export default function TwoButtonFooter({
  height,
  width,
  buttonLeftText,
  buttonRightText,
  buttonLeftTo,
  buttonRightTo,
  onPress,
}: twoButtonFooterProps) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={{ ...styles.button, height: height, width: width }}
        onPress={() => {
          router.push(buttonLeftTo);
          onPress!();
        }}
      >
        <Text style={styles.buttonText}>{buttonLeftText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: "#3350E9",
          height: height,
          width: width,
        }}
        onPress={() => {
          router.push(buttonRightTo);
          onPress!();
        }}
      >
        <Text style={{ ...styles.buttonText, color: "#FFFFFF" }}>
          {buttonRightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    height: 40,
    borderColor: "#3350E9",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
