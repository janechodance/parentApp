import { View, Text, StyleSheet, ScrollView } from "react-native";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import RadioButtonCollection from "./component/survey/radioButtonCollection";
import ClientSurveyImage from "../assets/background/clientSurveyImage.svg";
import LocationAnswer from "./component/survey/locationAnswer";
import SkillAnswer from "./component/survey/skillAnswer";
import Circles from "../assets/background/circles.svg";
import Squiggles from "../assets/background/squiggle.svg";
import Squares from "../assets/background/squares.svg";
import BigSquiggle from "../assets/background/bigSquiggle.svg";
import { useState } from "react";
import CheckboxCollection from "./component/survey/checkboxCollection";
import MoodCardAnswer from "./component/survey/moodCardAnswer";

export default function ClientSurvey() {
  const timeOptions = [
    "Less than 15 minutes",
    "15 to 30 minutes",
    "30 to 60 minutes",
    "60+ minutes",
    "I'm flexible!",
  ];
  const personOptions = [
    "Sam, partner, adult",
    "Lee, child, 12yrs",
    "Devon, child, 6yrs",
    "Tina, caregiver, adult",
  ];

  const equipmentOptions = [
    "Wheelchair",
    "Walker",
    "Stander",
    "Not applicable",
  ];
  const [timeSelected, setTimeSelected] = useState(-1);
  const [personSelected, setPersonSelected] = useState<number[] | []>([]);
  const [equipmentSelected, setEquipmentSelected] = useState<number[] | []>([]);
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.firstScreen}>
          <Text style={styles.headerText}>Personalized for YOU!</Text>
          <View style={styles.screenImage}>
            <ClientSurveyImage />
          </View>
          <Text style={styles.contentText}>
            We are here to help! Please enter as much or as little information
            you want. This will help us recommend activities tailored to your
            needs.
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 472,
            right: -24,
            zIndex: -1,
          }}
        >
          <Squiggles />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>How much time do you have?</Text>
          <RadioButtonCollection
            options={timeOptions}
            timeSelected={timeSelected}
            setTimeSelected={setTimeSelected}
          />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>Where are you?</Text>
          <LocationAnswer location={location} setLocation={setLocation} />
        </View>
        <View
          style={{
            position: "absolute",
            top: 1140,
            left: -22,
            zIndex: -1,
          }}
        >
          <Circles />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>
            What skills do you want to practice?
          </Text>
          <SkillAnswer skill={skill} setSkill={setSkill} />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>Is anyone with you today?</Text>
          <CheckboxCollection
            options={personOptions}
            optionsSelected={personSelected}
            setOptionsSelected={setPersonSelected}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 1800,
            right: -22,
            zIndex: -1,
          }}
        >
          <Squares />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>
            What equipment do you have today?
          </Text>
          <CheckboxCollection
            options={equipmentOptions}
            optionsSelected={equipmentSelected}
            setOptionsSelected={setEquipmentSelected}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 2125,
            left: -22,
            zIndex: -1,
          }}
        >
          <BigSquiggle />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>How is your child feeling?</Text>
          <MoodCardAnswer />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>How are you feeling?</Text>
          <MoodCardAnswer />
        </View>
        <View style={styles.submitButtonContainer}>
          <OneButtonFooter buttonText="Submit" buttonTo="../activityResults" />
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
    width: 343,
  },
  firstScreen: {
    marginTop: 32,
  },
  screen: {
    marginTop: 84,
  },
  screenImage: {
    alignSelf: "center",
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 32,
    lineHeight: 48,
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  contentText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#292524",
    width: 316,
    marginTop: 38,
  },
  questionText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 8,
  },
  submitButtonContainer: {
    marginTop: 36,
    marginBottom: 32,
  },
});
