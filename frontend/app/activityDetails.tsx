import { View, StyleSheet, Image, ScrollView } from "react-native";
import ActivityHeader from "./component/activity/activityHeader";
import ActivityHistory from "./component/activity/activityHistory";
import Accordion from "./component/activity/accordion";
import { useEffect, useState } from "react";
import ActivityMaterials from "./component/activity/activityMaterials";
import ActivityInstructions from "./component/activity/activityInstructions";
import ActivityModifications from "./component/activity/activityModifications";
import ActivityCredit from "./component/activity/activityCredits";
import TwoButtonFooter from "./component/footer/twoButtonFooter";
import HeaderWithNotes from "./component/header/headerWithNotes";
import Pagination from "../assets/icons/pagination.svg";
import axios from "axios";
import { Activity } from "./customtypes/types";
import ActivitySkills from "./component/activity/activitySkills";
import { useGlobalSearchParams } from "expo-router";

export default function ActivityDetails() {
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isModificationsOpen, setIsModificationsOpen] = useState(false);
  const { activityId } = useGlobalSearchParams();
  const [activity, setActivity] = useState<Activity>();

  useEffect(() => {
    axios
      .get(`https://9d86-148-74-83-32.ngrok-free.app/activity/${activityId}`)
      .then((res) => setActivity(res.data))
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, []);

  return activity ? (
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
        <ActivityHeader
          name={activity.name}
          setup_time={activity.setup_time}
          active_time={activity.active_time}
          description={activity.description}
        />
        <ActivitySkills
          primarySkillsIds={activity.primary_skills_ids}
          secondarySkillsIds={activity.secondary_skills_ids}
        />
        <ActivityHistory />
        <View style={{ ...styles.accordion, marginTop: 56 }}>
          <Accordion
            header="Materials"
            isOpen={isMaterialsOpen}
            setIsOpen={setIsMaterialsOpen}
          />

          {isMaterialsOpen ? (
            <ActivityMaterials
              materialDescription={activity.material_description}
              materials={activity.materials}
              detailPage
            />
          ) : null}
        </View>
        <View style={styles.accordion}>
          <Accordion
            header="Instructions"
            isOpen={isInstructionsOpen}
            setIsOpen={setIsInstructionsOpen}
          />
          {isInstructionsOpen ? (
            <ActivityInstructions
              instructions={activity.instructions}
              detailPage
            />
          ) : null}
        </View>
        <View style={styles.accordion}>
          <Accordion
            header="Modifications"
            isOpen={isModificationsOpen}
            setIsOpen={setIsModificationsOpen}
          />
          {isModificationsOpen ? (
            <ActivityModifications modifications={activity.modifications} />
          ) : null}
        </View>
        <ActivityCredit
          postedBy={activity.posted_by}
          reviewedBy={activity.reviewed_by}
        />
        <View style={styles.footer}>
          <TwoButtonFooter
            height={48}
            width={164}
            buttonLeftText="Track Progress"
            buttonRightText="Start Activity"
            buttonLeftTo="/feedbackSurvey"
            buttonRightTo="/startActivity"
            activityId={activity.id}
          />
        </View>
      </View>
    </ScrollView>
  ) : null;
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
