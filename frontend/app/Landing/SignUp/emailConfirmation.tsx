import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProgressBar from "../../component/progressBar/progressBar";
import Header from "../../component/header/header";
import MailWithCheckMarkImage from "../../../assets/background/emailWithCheckmark.svg";
import OneButtonFooter from "../../component/footer/oneButtonFooter";

export default function EmailConfirmation() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <ProgressBar progress={0.4} />
        <Text style={styles.headerText}>Check your email!</Text>
        <Text style={styles.contentText}>
          To confirm your email address, tap the button in the email we sent to
          abc@gmail.com
        </Text>
        <Text>Didn't get the code?</Text>
        <MailWithCheckMarkImage style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
        <OneButtonFooter
          buttonText="Next"
          buttonTo="Landing/SignUp/primaryCaregiverProfile"
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
    alignSelf: "center",
    marginTop: 88,
    marginBottom: 8,
    width: 270,
  },
  contentText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: 32,
    alignSelf: "center",
    width: 270,
  },
  footerContainer: {
    marginTop: 76,
    width: "100%",
    alignItems: "center",
  },
  image: {
    marginTop: 32,
  },
});
