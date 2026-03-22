import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProgressBar from "../../component/progressBar/progressBar";
import Header from "../../component/header/header";
import { TextInput } from "react-native-paper";
import OneButtonFooter from "../../component/footer/oneButtonFooter";
import SurveyQuestion from "../../component/survey/surveyQuestion";
import ThumbUpDown from "../../component/survey/thumbUpDown";
import { useState } from "react";
import CheckboxCollection from "../../component/survey/checkboxCollection";

export default function AddChildProfile() {
  const [hasTherapyGoals, setHasTherapyGoals] = useState("");
  const workingOnOptions = [
    "Gross motor skills",
    "Fine motor skills",
    "Communication",
    "Life skills/Activities of Daily Living",
    "Social Play",
    "Sensory Skills",
    "Not Applicable",
    "Other",
  ];
  const equipmentOptions = [
    "Wheelchair",
    "Stander",
    "Walker/Rollater/Gait trainer",
    "Casts, Braces, or AFOs",
    "AAC/alternative communication device",
    "Sensory Equipment",
    "Not Applicable",
    "Other",
  ];
  const [workingOnSelected, setWorkingOnSelected] = useState<number[] | []>([]);
  const [equipmentSelected, setEquipmentSelected] = useState<number[] | []>([]);
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <ProgressBar progress={0.8} />
        <Text style={styles.headerText}>Create your child's profile</Text>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Birth Month/Year" />
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Does this child have therapy goals or therapeutic activities they are
          working on?"
            answer={
              <ThumbUpDown
                value={hasTherapyGoals}
                setValue={setHasTherapyGoals}
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="What is your child working on?"
            answer={
              <CheckboxCollection
                options={workingOnOptions}
                optionsSelected={workingOnSelected}
                setOptionsSelected={setWorkingOnSelected}
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="What equipment does your child use?"
            answer={
              <CheckboxCollection
                options={equipmentOptions}
                optionsSelected={equipmentSelected}
                setOptionsSelected={setEquipmentSelected}
              />
            }
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <OneButtonFooter
          buttonText="Next"
          buttonTo="Landing/SignUp/childProfileConfirmation"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 32,
  },
  container: {
    width: 343,
    marginTop: 32,
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 36,
    marginBottom: 32,
    alignSelf: "center",
    marginTop: 88,
  },
  input: {
    width: 350,
    height: 54,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderColor: "#3350E9",
    borderWidth: 2,
    marginBottom: 16,
  },
  footerContainer: {
    marginTop: 88,
    width: "100%",
    alignItems: "center",
    marginBottom: 64,
  },
  questionText: {
    fontFamily: "Jost-Medium",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 64,
  },
  questionContainer: { alignSelf: "flex-start", marginTop: 32 },
});
