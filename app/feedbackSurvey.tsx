import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import SurveyQuestion from "./component/survey/surveyQuestion";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import ThumbUpDown from "./component/survey/thumbUpDown";
import StarsAnswer from "./component/survey/starsAnswer";
import MoodCardAnswer from "./component/survey/moodCardAnswer";
import RadioButtonCollection from "./component/survey/radioButtonCollection";
import TextAnswer from "./component/survey/textAnswer";
import ImageUpload from "./component/survey/imageUpload";
import NotificationBlack from "../assets/icons/notificationBlack.svg";
import ScaleAnswer from "./component/survey/scaleAnswer";
import { useState } from "react";
import PlusCircle from "../assets/icons/plusCircle.svg";
import CheckboxCollection from "./component/survey/checkboxCollection";

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
  const [starRating, setStarRating] = useState(0);
  const [again, setAgain] = useState("");
  const [complete, setComplete] = useState("");
  const [timeSelected, setTimeSelected] = useState(-1);
  const [challengeSelected, setChallengeSelected] = useState<number[] | []>([]);
  const [materialSelected, setMaterialSelected] = useState<number[] | []>([]);

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
            answer={<ThumbUpDown value={again} setValue={setAgain} />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="How would you rate this activity?"
            answer={
              <StarsAnswer
                starRating={starRating}
                setStarRating={setStarRating}
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Did you complete this activity?"
            answer={<ThumbUpDown value={complete} setValue={setComplete} />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Did your child enjoy the activity?"
            answer={<MoodCardAnswer feedback />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="How easy was it for your child to complete this activity?"
            answer={<ScaleAnswer />}
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="Please share what made this activity challenging?"
            answer={
              <CheckboxCollection
                options={challengingOptions}
                optionsSelected={challengeSelected}
                setOptionsSelected={setChallengeSelected}
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="How long did you do this activity today?"
            answer={
              <RadioButtonCollection
                options={timeOptions}
                timeSelected={timeSelected}
                setTimeSelected={setTimeSelected}
              />
            }
          />
        </View>
        <View style={styles.questionContainer}>
          <SurveyQuestion
            question="What materials did you use during the color sorting activity?"
            answer={
              <CheckboxCollection
                options={materialsOptions}
                optionsSelected={materialSelected}
                setOptionsSelected={setMaterialSelected}
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
            buttonTo={
              complete === "yes" ? "./completeSummary" : "./incompleteSummary"
            }
          />
        </View>
        <View style={styles.reminderContainer}>
          <NotificationBlack />
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
          <View style={{ marginLeft: 68 }}>
            <PlusCircle />
          </View>
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
