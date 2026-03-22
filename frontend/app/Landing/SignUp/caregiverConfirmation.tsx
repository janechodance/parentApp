import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProgressBar from "../../component/progressBar/progressBar";
import Header from "../../component/header/header";
import CheckMarkImage from "../../../assets/background/checkMark.svg";
import VerticalTwoButtonFooter from "../../component/footer/verticalTwoButtonFooter";
import { useLocalSearchParams } from "expo-router/build/exports";

export default function CaregiverConfirmation() {
  const params = useLocalSearchParams();
  const additionalCaregiver =
    params.additionalCaregiver === "true" ? true : false;
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <ProgressBar progress={0.7} />
        {additionalCaregiver ? (
          <>
            <Text style={styles.headerText}>
              John’s confirmation has been sent.
            </Text>
            <Text style={styles.infoText}>
              John has 10 days to accept the email invitation.
            </Text>
          </>
        ) : (
          <Text style={styles.headerText}>
            Congratulations, Amy! Your caregiver profile is set up.
          </Text>
        )}
        <CheckMarkImage style={styles.image} />
      </View>
      <View
        style={[
          styles.footerContainer,
          { marginTop: additionalCaregiver ? 72 : 104 },
        ]}
      >
        <VerticalTwoButtonFooter
          topButtonText="Add another caregiver?"
          bottomButtonText="Continue"
          topButtonTo="Landing/SignUp/additionalCaregiverProfile"
          bottomButtonTo="Landing/SignUp/addChildProfile"
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
    lineHeight: 38,
    marginTop: 88,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  infoText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  footerContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    marginTop: 88,
  },
});
