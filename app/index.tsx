import { router } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import WeekReview from "./component/homePage/weekReview";
import { ScrollView } from "react-native-gesture-handler";
import ActivityCarousel from "./component/homePage/activityCarousel";
import EnergyLevel from "./component/homePage/energyLevel";

export default function App() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <Image
          style={styles.welcomeScreenBackground}
          source={require("../assets/background/circles.png")}
        ></Image>
        <View style={styles.welcomeScreen}>
          <Text style={styles.welcomeText}>Welcome Back, Max!</Text>
          <Image
            style={styles.welcomeImage}
            source={require("../assets/background/homepageImage.png")}
          />
          <Text style={styles.welcomeDescriptionText}>
            We want to meet you where you're at and can help pick an activity
            just for you!
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/clientSurvey")}
            style={styles.welcomeButton}
          >
            <Text style={styles.welcomeButtonText}>My Activity Finder</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <WeekReview />
        </View>
        <View style={styles.sectionContainer}>
          <ActivityCarousel header="Recent Activities" />
        </View>
        <View style={styles.sectionContainer}>
          <EnergyLevel />
        </View>
        <View style={styles.sectionContainer}>
          <ActivityCarousel header="Popular Activities" />
        </View>
        <View style={styles.sectionContainer}>
          <ActivityCarousel header="Try Again!" />
        </View>
        <View style={styles.sectionContainer}>
          <ActivityCarousel header="Fun in the Sun" />
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
  welcomeScreenBackground: { position: "absolute", top: 50, left: "25%" },
  welcomeScreen: {
    marginTop: 24,
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
    alignSelf: "center",
  },
  welcomeText: {
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
  sectionContainer: {
    marginTop: 72,
  },
});
