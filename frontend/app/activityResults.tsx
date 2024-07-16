import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";
import ActivityCard from "./component/activityCard/activityCard";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import ArrowLeft from "../assets/icons/arrowLeft.svg";
import Caret from "../assets/icons/caret.svg";
import { useEffect, useState } from "react";
import { Activity } from "./customtypes/types";
import axios from "axios";

export default function ActivityResults() {
  const [activities, setActivities] = useState<Activity[]>();
  useEffect(() => {
    axios
      .get(`${process.env.EXPO_PUBLIC_API_URL}/activity`)
      .then((res) => setActivities(res.data))
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.firstScreen}>
          <TouchableOpacity onPress={() => router.push("./clientSurvey")}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.headerText}>Some Options for YOU!</Text>
        </View>
        <FlatList
          data={activities}
          renderItem={({ item }) => (
            <ActivityCard
              activity={item}
              name={item.name}
              description={item.description}
              primarySkillsIds={item.primary_skills_ids}
              secondarySkillsIds={item.secondary_skills_ids}
            />
          )}
          key={uuidv4()}
          scrollEnabled={false}
        />
        <View style={styles.moreButton}>
          <Text style={styles.moreText}>View More</Text>
          <Caret />
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
    width: 342,
  },
  firstScreen: {
    marginTop: 32,
  },
  activityCardScreen: {
    marginTop: 32,
  },

  headerText: {
    marginTop: 24,
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
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
    alignSelf: "center",
    marginBottom: 32,
    marginTop: 32,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    marginRight: 8,
  },
});
