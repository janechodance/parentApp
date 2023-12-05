import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ActivityHeader from "./activityHeader";
import ActivityHistory from "./activityHistory";
import Accordion from "./accordion";
import { useState } from "react";
import ActivityMaterials from "./activityMaterials";
import ActivityInstructions from "./activityInstructions";
import ActivityModifications from "./activityModifications";
import ActivityCredit from "./activityCredits";
import TwoButtonFooter from "../component/footer/twoButtonFooter";

export default function ActivityDetails() {
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isModificationsOpen, setIsModificationsOpen] = useState(false);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.firstScreen}>
          <TouchableOpacity onPress={() => router.push("../activityResults")}>
            <Image source={require("../../assets/icons/arrowLeft.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notesButton}>
            <Text style={styles.notesButtonText}>Notes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.activityImage}
            source={require("../../assets/activities/colorSortingActivity.png")}
          />
          <Image
            style={styles.paginationIcon}
            source={require("../../assets/icons/pagination.png")}
          />
        </View>
        <ActivityHeader />
        <ActivityHistory />
        <View style={{ ...styles.accordion, marginTop: 56 }}>
          <Accordion
            header="Materials"
            isOpen={isMaterialsOpen}
            setIsOpen={setIsMaterialsOpen}
          />

          {isMaterialsOpen ? <ActivityMaterials /> : null}
        </View>
        <View style={styles.accordion}>
          <Accordion
            header="Instructions"
            isOpen={isInstructionsOpen}
            setIsOpen={setIsInstructionsOpen}
          />
          {isInstructionsOpen ? <ActivityInstructions /> : null}
        </View>
        <View style={styles.accordion}>
          <Accordion
            header="Modifications"
            isOpen={isModificationsOpen}
            setIsOpen={setIsModificationsOpen}
          />
          {isModificationsOpen ? <ActivityModifications /> : null}
        </View>
        <ActivityCredit />
        <View style={styles.footer}>
          <TwoButtonFooter
            height={48}
            buttonLeftText="Track Progress"
            buttonRightText="Start Activity"
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFCFC",
  },
  container: {
    flex: 1,
    width: 342,
    marginBottom: 50,
  },
  firstScreen: {
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
  activityImage: {
    height: 213,
    width: "100%",
    borderRadius: 8,
    marginTop: 24,
  },
  paginationIcon: {
    alignSelf: "center",
    marginTop: 10,
  },
  accordion: {
    marginTop: 32,
  },
  footer: {
    marginTop: 56,
  },
});
