import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

interface verticalTwoButtonFooterProps {
  topButtonText: string;
  bottomButtonText: string;
  topButtonTo: string;
  bottomButtonTo: string;
}
export default function VerticalTwoButtonFooter({
  topButtonText,
  bottomButtonText,
  topButtonTo,
  bottomButtonTo,
}: verticalTwoButtonFooterProps) {
  return (
    <>
      <Link
        href={{
          pathname: topButtonTo,
        }}
      >
        <View style={styles.footerContainer}>
          <View style={styles.topButton}>
            <Text style={styles.topText}>{topButtonText}</Text>
          </View>
        </View>
      </Link>
      <Link
        href={{
          pathname: bottomButtonTo,
        }}
      >
        <View style={styles.footerContainer}>
          <View style={styles.bottomButton}>
            <Text style={styles.text}>{bottomButtonText}</Text>
          </View>
        </View>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topButton: {
    width: 343,
    backgroundColor: "#FFFCFC",
    borderColor: "#3350E9",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 28,
  },
  bottomButton: {
    width: 343,
    backgroundColor: "#3350E9",
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  topText: {
    color: "#000000",
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
});
