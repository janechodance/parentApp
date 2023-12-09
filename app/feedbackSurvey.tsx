import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import SurveyQuestion from "./component/survey/surveyQuestion";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import ThumbUpDown from "./component/survey/thumbUpDown";
import StarsAnswer from "./component/survey/starsAnswer";
import MoodCardAnswer from "./component/survey/moodCardAnswer";
import RadioButtonCollection from "./component/survey/radioButtonCollection";
import TextAnswer from "./component/survey/textAnswer";
import ImageUpload from "./component/survey/imageUpload";

export default function FeedbackSurvey() {
  const challengingOptions = [
    "Physically difficult to facilitate",
    "Difficult set-up",
    "Difficult to understand what to do",
    "Other",
  ];
  const timeOptions = [
    "0-5 minutes",
    "5-10 minutes",
    "10-15 minutes",
    "15-25 minutes",
    "30+ minutes",
  ];
  const materialsOptions = [
    "Crayons or Markers",
    "Pom Poms, Feathers, Buttons",
    "Blocks",
    "Socks or Clothing Items",
    "Books",
    "AAC device",
    "Other",
  ];
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Feedback Survey</Text>
        <Image
          style={styles.feebackImage}
          source={require("../assets/feedback.png")}
        />
        <Text style={styles.descriptionHeaderText}>
          Fill out as much or as little as you like.
        </Text>
        <Text style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>
            This feedback questionnaire can be used by ParentApp to provide more{" "}
          </Text>
          <Text
            style={{ ...styles.descriptionText, fontFamily: "Arimo-Italic" }}
          >
            personalized{" "}
          </Text>
          <Text style={styles.descriptionText}>
            recommendations, understand your likes and dislikes, as well as
            offer a place for you to{" "}
          </Text>
          <Text
            style={{ ...styles.descriptionText, fontFamily: "Arimo-Italic" }}
          >
            write notes and reminders{" "}
          </Text>
          <Text style={styles.descriptionText}>
            about this activity specifically.
          </Text>
        </Text>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Would you do this activity again?"
            answer={<ThumbUpDown />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="How would you rate this activity?"
            answer={<StarsAnswer />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Did you complete this activity?"
            answer={<ThumbUpDown />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Did your child enjoy the activity?"
            answer={<MoodCardAnswer />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="How easy was it for your child to complete this activity?"
            answer={<ThumbUpDown />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Please share what made this activity challenging?"
            answer={
              <RadioButtonCollection
                options={challengingOptions}
                style="square"
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="How long did you do this activity today?"
            answer={
              <RadioButtonCollection options={timeOptions} style="circle" />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="What materials did you use during the color sorting activity?"
            answer={
              <RadioButtonCollection
                options={materialsOptions}
                style="square"
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Use this space to take some personal notes!"
            answer={<TextAnswer />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Have any personal photos or videos from this activity? Upload them here!"
            answer={<ImageUpload />}
          />
        </View>
        <View style={styles.questionContainer}>
          <OneButtonFooter
            buttonText="Submit Feedback"
            buttonTo="../incompleteSummary"
          />
        </View>
        <View style={styles.reminderContainer}>
          <Image source={require("../assets/icons/notification.png")} />
          <Text
            style={{
              ...styles.descriptionHeaderText,
              color: "#3350E9",
              marginLeft: 12,
              marginRight: 16,
            }}
          >
            Set Reminder?
          </Text>
          <Image
            style={{ marginLeft: 68 }}
            source={require("../assets/icons/plusCircle.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFCFC",
  },
  container: {
    width: 343,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    marginBottom: 24,
    alignSelf: "flex-start",
    marginTop: 28,
  },
  feebackImage: {
    height: 125,
    resizeMode: "contain",
    marginBottom: 24,
  },
  descriptionHeaderText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
  descriptionText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  descriptionTextContainer: {
    marginTop: 24,
  },
  questionContainer: {
    marginTop: 64,
  },
  reminderContainer: {
    borderBottomColor: "#B0B0B0",
    borderBottomWidth: 1,
    borderTopColor: "#B0B0B0",
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 64,
    marginBottom: 64,
  },
});
