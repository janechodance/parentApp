import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProgressBar from "../../component/progressBar/progressBar";
import Header from "../../component/header/header";
import { TextInput } from "react-native-paper";
import OneButtonFooter from "../../component/footer/oneButtonFooter";
import CheckboxCollection from "../../component/survey/checkboxCollection";
import { useState } from "react";

export default function AdditionalCaregiverProfile() {
  const editOptions = [
    "Personal demographic information",
    "Health records",
    "Goals and Plans",
  ];
  const viewOptions = [...editOptions, "History"];
  const [editOptionsSelected, setEditOptionsSelected] = useState<number[] | []>(
    [],
  );
  const [viewOptionsSelected, setViewOptionsSelected] = useState<number[] | []>(
    [],
  );
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <ProgressBar progress={0.8} />
        <Text style={styles.headerText}>New caregiver profile</Text>
        <TextInput style={styles.emailInput} placeholder="First Name" />
        <TextInput style={styles.emailInput} placeholder="Last Name" />
        <TextInput style={styles.emailInput} placeholder="Email" />
        <Text style={styles.questionText}>
          Please check what information this caregiver can edit within BoogieUp.
        </Text>
        <CheckboxCollection
          options={editOptions}
          setOptionsSelected={setEditOptionsSelected}
          optionsSelected={editOptionsSelected}
        />
        <Text style={styles.questionText}>
          Please check what information this caregiver can view within BoogieUp.
        </Text>
        <CheckboxCollection
          options={viewOptions}
          setOptionsSelected={setViewOptionsSelected}
          optionsSelected={viewOptionsSelected}
        />
      </View>
      <View style={styles.footerContainer}>
        <OneButtonFooter
          buttonText="Next"
          buttonTo="Landing/SignUp/caregiverConfirmation"
          params={{ additionalCaregiver: true }}
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
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 36,
    marginBottom: 32,
    marginTop: 88,
  },
  emailInput: {
    width: 350,
    height: 54,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderColor: "#3350E9",
    borderWidth: 2,
    marginBottom: 16,
  },
  footerContainer: {
    marginTop: 64,
    width: "100%",
    alignItems: "center",
  },
  questionText: {
    fontFamily: "Jost-Medium",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 64,
  },
});
