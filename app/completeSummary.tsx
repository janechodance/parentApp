import { View, Text, ScrollView, StyleSheet } from "react-native";
import Confetti from "../assets/background/confetti.svg";
import ConfettiBottom from "../assets/background/confettiBottom.svg";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import ActivityHighlight from "./component/activityHighlight";

export default function CompleteSummary() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View>
          <Confetti style={{ position: "absolute" }} />
          <Text style={styles.headerText}>Awesome Job!</Text>
          <Text style={styles.headerContentText}>
            Thank you for tracking your progress! This information helps us make
            better recommendations for you and your family.
          </Text>
        </View>
        <View style={styles.highlightContainer}>
          <ConfettiBottom style={{ position: "absolute" }} />
          <ActivityHighlight />
        </View>
        <View>
          <OneButtonFooter buttonText="View Progress Log" buttonTo="/" />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFCFC",
  },
  container: {
    flex: 1,
    width: 343,
    marginTop: 24,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    marginTop: 64,
  },
  headerContentText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 24,
  },
  highlightContainer: {
    marginTop: 56,
  },
});
