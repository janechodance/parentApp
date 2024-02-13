import { router } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import WeekReview from "./component/homePage/weekReview";
import { ScrollView } from "react-native-gesture-handler";
import ActivityCarousel from "./component/homePage/activityCarousel";
import EnergyLevel from "./component/homePage/energyLevel";
import Catergories from "./component/homePage/categories";
import Quote from "./component/homePage/quote";
import Paint from "../assets/background/paint.svg";
import Diamonds from "../assets/background/diamonds.svg";
import Halfsun from "../assets/background/halfsun.svg";
import Vector from "../assets/background/Vector.svg";
import Triangles from "../assets/background/triangles.svg";
import Circles from "../assets/background/circles.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityProvider } from "./context/activityContext";

export default function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get("https://9d86-148-74-83-32.ngrok-free.app/user/1")
      .then((res) => setUser(res.data.name))
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, []);
  return (
    <ActivityProvider>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.container}>
          <View
            style={{
              position: "absolute",
              top: 50,
              left: 90,
              zIndex: -1,
            }}
          >
            <Circles />
          </View>
          <View style={styles.welcomeScreen}>
            <Text style={styles.welcomeText}>Welcome Back, {user}!</Text>
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
          <View
            style={{
              position: "absolute",
              top: 550,
              left: -22,
              zIndex: -1,
            }}
          >
            <Triangles />
          </View>
          <View style={styles.sectionContainer}>
            <ActivityCarousel header="Recent Activities" />
          </View>
          <View style={styles.sectionContainer}>
            <EnergyLevel />
          </View>
          <View
            style={{
              position: "absolute",
              top: 1600,
              right: -22,
              zIndex: -1,
            }}
          >
            <Paint />
          </View>
          <View style={styles.sectionContainer}>
            <Catergories />
          </View>
          <View style={styles.sectionContainer}>
            <Quote />
          </View>
          <View
            style={{
              position: "absolute",
              top: 2450,
              right: -22,
              zIndex: -1,
            }}
          >
            <Diamonds />
          </View>
          <View style={styles.sectionContainer}>
            <ActivityCarousel header="Popular Activities" />
          </View>
          <View
            style={{
              position: "absolute",
              top: 3100,
              right: -22,
              zIndex: -1,
            }}
          >
            <Halfsun />
          </View>
          <View style={styles.sectionContainer}>
            <ActivityCarousel header="Try Again!" />
          </View>
          <View
            style={{
              position: "absolute",
              top: 3590,
              left: -22,
              zIndex: -1,
            }}
          >
            <Vector />
          </View>
          <View style={styles.sectionContainer}>
            <ActivityCarousel header="Fun in the Sun" />
          </View>
        </View>
      </ScrollView>
    </ActivityProvider>
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
