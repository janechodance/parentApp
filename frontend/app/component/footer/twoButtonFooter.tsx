import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

interface twoButtonFooterProps {
  height: number;
  width: number;
  buttonLeftText: string;
  buttonRightText: string;
  buttonLeftTo: string;
  buttonRightTo: string;
  activityId?: number;
}
export default function TwoButtonFooter({
  height,
  width,
  buttonLeftText,
  buttonRightText,
  buttonLeftTo,
  buttonRightTo,
  activityId,
}: twoButtonFooterProps) {
  return (
    <View style={styles.footerContainer}>
      <Link
        href={{
          pathname: buttonLeftTo,
          params: { activityId: activityId },
        }}
      >
        <View style={{ ...styles.button, height: height, width: width }}>
          <Text style={styles.buttonText}>{buttonLeftText}</Text>
        </View>
      </Link>
      <Link
        href={{
          pathname: buttonRightTo,
          params: { activityId: activityId },
        }}
      >
        <View
          style={{
            ...styles.button,
            backgroundColor: "#3350E9",
            height: height,
            width: width,
          }}
        >
          <Text style={{ ...styles.buttonText, color: "#FFFFFF" }}>
            {buttonRightText}
          </Text>
        </View>
      </Link>
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
