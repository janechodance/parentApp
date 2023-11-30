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
            style={styles.screenImage}
            source={require("../assets/clientSurveyImage.png")}
          />
          <Text style={styles.contentText}>
            We are here to help! Please enter as much or as little information
            you want. This will help us recommend activities tailored to your
            needs.
          </Text>
        </View>
        <View style={styles.screen}>
          <Image
            style={styles.squiggleRight}
            source={require("../assets/squiggle.png")}
          />
          <Text style={styles.questionText}>How much time do you have?</Text>
          <TouchableOpacity style={styles.optionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.optionsText}>Less then 15 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.optionsText}>15 to 30 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.optionsText}>30 to 60 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.optionsText}>60+ minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsContainer}>
            <Image source={require("../assets/radioButton.png")} />
            <Text style={styles.optionsText}>I'm flexible!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screen}>
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
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreText}>View More Locations</Text>
            <Image source={require("../assets/caret.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.screen}>
          <Image
            style={styles.circle}
            source={require("../assets/circles.png")}
          />
          <Text style={styles.questionText}>
            What skills do you want to practice?
          </Text>
          <View style={styles.skillButtonContainer}>
            <TouchableOpacity style={styles.skillButton}>
              <Text style={styles.skillsButtonText}>Gross Motor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillButton}>
              <Text style={styles.skillsButtonText}>Fine Motor</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.skillButtonContainer}>
            <TouchableOpacity style={styles.skillButton}>
              <Text style={styles.skillsButtonText}>Communication</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillButton}>
              <Text style={styles.skillsButtonText}>Social Play</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.skillButtonContainer}>
            <TouchableOpacity style={styles.skillButton}>
              <Text style={styles.skillsButtonText}>Daily Living Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skillButton}>
              <Text style={styles.skillsButtonText}>I'm Flexible</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreText}>View More Skills</Text>
            <Image source={require("../assets/caret.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>Is anyone with you today?</Text>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 24 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Sam, partner, adult
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 30 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Lee, child, 12yrs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 30 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Devon, child, 6yrs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 30 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Tina, caregiver, adult
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screen}>
          <Image
            style={styles.squares}
            source={require("../assets/squares.png")}
          />
          <Text style={styles.questionText}>
            What equipment do you have today?
          </Text>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 24 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Wheelchair
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 30 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Walker
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 30 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Stander
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.optionsContainer, marginTop: 30 }}
          >
            <Image source={require("../assets/squareRadioButton.png")} />
            <Text style={{ paddingLeft: 2, ...styles.optionsText }}>
              Not applicable
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>How is your child feeling?</Text>
          <Image
            style={styles.screenImage}
            source={require("../assets/moodCardGood.png")}
          />
        </View>
        <View style={styles.screen}>
          <Text style={styles.questionText}>How are you feeling?</Text>
          <Image
            style={styles.screenImage}
            source={require("../assets/moodCardGreat.png")}
          />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
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
  screen: {
    marginTop: 84,
  },
  screenImage: {
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
  optionsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  optionsText: {
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
  moreButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 24,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
  },
  skillsButtonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  skillButton: {
    borderColor: "#3350E9",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    width: 158,
    height: 48,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  skillButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
  },
  submitButton: {
    width: 343,
    backgroundColor: "#3350E9",
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 36,
  },
  submitText: {
    color: "#FFF",
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  squares: {
    position: "absolute",
    top: -90,
    right: -30,
  },
  circle: {
    position: "absolute",
    left: -46,
    transform: "rotate(-39.212deg)",
  },
  squiggleRight: {
    position: "absolute",
    top: -50,
    right: -10,
    transform: "rotate(-13.807deg)",
  },
});
