import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LandingImage from "../../assets/background/landing.svg";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BoogieUp</Text>
      <LandingImage />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up with Email</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.orText, marginTop: 24 }}>OR</Text>
      <Text style={styles.orText}>already have an account?</Text>
      <TouchableOpacity style={styles.logInsButton}>
        <Text style={{ ...styles.signUpButtonText, color: "black" }}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 48,
    marginTop: 96,
    marginBottom: 72,
  },
  signUpButton: {
    backgroundColor: "#3350E9",
    width: 342,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 72,
  },
  signUpButtonText: {
    fontSize: 16,
    fontFamily: "Jost-Medium",
    color: "#fff",
  },
  orText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Jost-Medium",
  },
  logInsButton: {
    borderColor: "#3350E9",
    borderWidth: 1,
    width: 342,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
