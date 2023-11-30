import { router } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.welcomeScreenBackground}
        source={require("../assets/circles.png")}
      ></Image>
      <View style={styles.welcomeScreen}>
        <Text style={styles.welcomeText}>Welcome Back, Max!</Text>
        <Image
          style={styles.welcomeImage}
          source={require("../assets/homepageImage.png")}
        />
        <Text style={styles.welcomeDescriptionText}>
          We want to meet you where you're at and can help pick an activity just
          for you!
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/clientSurvey")}
          style={styles.welcomeButton}
        >
          <Text style={styles.welcomeButtonText}>My Activity Finder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  welcomeScreenBackground: { position: "absolute", top: 50 },
  welcomeScreen: {
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeButton: {
    backgroundColor: "#3350E9",
    width: 342,
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeButtonText: {
    fontSize: 16,
    fontFamily: "Jost-Medium",
    color: "#fff",
  },
  welcomeImage: {
    margin: 20,
  },
  welcomeText: {
    marginLeft: 20,
    fontFamily: "Jost-Medium",
    fontSize: 28,
    alignSelf: "flex-start",
  },
  welcomeDescriptionText: {
    color: "#454545",
    fontFamily: "Arimo-Regular",
    fontSize: 14,
    height: 48,
    width: 342,
  },
});
