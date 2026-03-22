import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProgressBar from "../../component/progressBar/progressBar";
import Header from "../../component/header/header";
import MailImage from "../../../assets/background/mail.svg";
import { TextInput } from "react-native-paper";
import OneButtonFooter from "../../component/footer/oneButtonFooter";

export default function EmailSignUp() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <ProgressBar progress={0.25} />
        <Text style={styles.headerText}>Enter your email</Text>
        <TextInput style={styles.emailInput} />
        <MailImage />
      </View>
      <View style={styles.footerContainer}>
        <OneButtonFooter
          buttonText="Next"
          buttonTo="Landing/SignUp/emailConfirmation"
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
  emailInput: {
    width: 350,
    height: 54,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderColor: "#3350E9",
    borderWidth: 2,
    marginBottom: 88,
  },
  footerContainer: {
    marginTop: 128,
    width: "100%",
    alignItems: "center",
  },
});
