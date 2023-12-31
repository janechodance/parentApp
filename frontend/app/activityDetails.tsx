import { router } from "expo-router";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import ActivityHeader from "./component/activity/activityHeader";
import ActivityHistory from "./component/activity/activityHistory";
import Accordion from "./component/activity/accordion";
import { useState } from "react";
import ActivityMaterials from "./component/activity/activityMaterials";
import ActivityInstructions from "./component/activity/activityInstructions";
import ActivityModifications from "./component/activity/activityModifications";
import ActivityCredit from "./component/activity/activityCredits";
import TwoButtonFooter from "./component/footer/twoButtonFooter";
import HeaderWithNotes from "./component/header/headerWithNotes";
import Pagination from "../assets/icons/pagination.svg";

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
        <HeaderWithNotes />
        <View>
          <Image
            style={styles.activityImage}
            source={require("../assets/activities/colorSortingActivity.png")}
          />
          <View style={styles.paginationIcon}>
            <Pagination />
          </View>
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
            width={164}
            buttonLeftText="Track Progress"
            buttonRightText="Start Activity"
            buttonLeftTo="/activityDetails"
            buttonRightTo="/startActivity"
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
