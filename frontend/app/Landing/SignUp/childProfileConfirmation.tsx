import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProgressBar from "../../component/progressBar/progressBar";
import Header from "../../component/header/header";
import CheckMarkImage from "../../../assets/background/checkMark.svg";
import VerticalTwoButtonFooter from "../../component/footer/verticalTwoButtonFooter";
import { Link } from "expo-router/build/exports";

export default function ChildProfileConfirmation() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Header />
      <View style={styles.container}>
        <ProgressBar progress={0.9} />
        <Text style={styles.headerText}>
          Sarah has been added to your profile!
        </Text>
        <CheckMarkImage style={styles.image} />
        <Text style={styles.infoText}>
          You can update this information anytime in settings or{" "}
          <Link style={styles.linkStyle} href="Pages/profile">
            My Profile
          </Link>
          .
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <VerticalTwoButtonFooter
          topButtonText="Add another child?"
          bottomButtonText="Continue"
          topButtonTo="Landing/SignUp/addChildProfile"
          bottomButtonTo="/"
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
    alignSelf: "center",
  },
  infoText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    marginTop: 32,
    marginBottom: 8,
    alignSelf: "center",
    textAlign: "center",
    width: 282,
  },
  footerContainer: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  image: {
    marginTop: 88,
  },
  linkStyle: {
    color: "#3350E9",
    fontWeight: "700",
  },
});
