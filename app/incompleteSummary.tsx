import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Confetti from "../assets/background/confetti.svg";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import ActivityHighlight from "./component/summary/activityHighlight";
import NoteDisplay from "./component/summary/noteDisplay";
import ProgressDisplay from "./component/summary/progressDisplay";
import Exit from "../assets/icons/exit.svg";
import { router } from "expo-router";

export default function IncompleteSummary() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View>
          <Confetti style={{ position: "absolute" }} />
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.exit}
          >
            <Exit />
          </TouchableOpacity>
          <Text style={styles.headerText}>Keep Learning and Growing!</Text>
          <Text style={styles.headerContentText}>
            Thank you for tracking your progress! This information helps us make
            better recommendations for you and your family.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <ActivityHighlight complete={false} />
        </View>
        <View style={styles.sectionContainer}>
          <NoteDisplay note="Had a difficult time keeping Charlie focused on the activity. Next time try to have a sibling join..." />
        </View>
        <View style={styles.sectionContainer}>
          <ProgressDisplay complete={false} />
        </View>
        <View style={styles.footer}>
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
  exit: {
    position: "absolute",
    top: 0,
    right: 0,
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
  sectionContainer: {
    marginTop: 56,
  },
  footer: {
    marginTop: 20,
    marginBottom: 72,
  },
});
