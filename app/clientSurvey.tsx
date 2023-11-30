import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function ClientSurvey() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.firstScreen}>
          <Text style={styles.headerText}>Personalized for YOU!</Text>
          <Image
            style={styles.firstScreenImage}
            source={require("../assets/clientSurveyImage.png")}
          />
          <Text style={styles.contentText}>
            We are here to help! Please enter as much or as little information
            you want. This will help us recommend activities tailored to your
            needs.
          </Text>
        </View>
        <View style={styles.secondScreen}>
          <Text style={styles.questionText}>How much time do you have?</Text>
          <TouchableOpacity style={styles.timeOptionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.timeOptionsText}>Less then 15 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeOptionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.timeOptionsText}>15 to 30 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeOptionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.timeOptionsText}>30 to 60 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeOptionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.timeOptionsText}>60+ minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timeOptionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.timeOptionsText}>I'm flexible!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdScreen}>
          <Text style={styles.questionText}>Where are you?</Text>
          <View style={styles.locationContainer}>
            <TouchableOpacity>
              <Image source={require("../assets/homeLocationButton.png")} />
              <Text style={styles.locationOptionsText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/outsideLocationButton.png")} />
              <Text style={styles.locationOptionsText}>Outside</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/carLocationButton.png")} />
              <Text style={styles.locationOptionsText}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/storeLocationButton.png")} />
              <Text style={styles.locationOptionsText}>Store</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.moreLocationButton}>
            <Text style={styles.moreLocationText}>View More Locations</Text>
            <Image source={require("../assets/caret.png")} />
          </TouchableOpacity>
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
  firstScreen: {
    marginTop: 32,
  },
  secondScreen: {
    marginTop: 84,
  },
  thirdScreen: {
    marginTop: 84,
  },
  firstScreenImage: {
    alignSelf: "center",
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 32,
    lineHeight: 48,
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  contentText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#292524",
    width: 316,
    marginTop: 38,
  },
  questionText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 8,
  },
  timeOptionsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  timeOptionsText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  locationOptionsText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    alignSelf: "center",
  },
  moreLocationButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 24,
  },
  moreLocationText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
  },
});
