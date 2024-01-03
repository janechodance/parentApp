import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import HeaderWithNotes from "./component/header/headerWithNotes";
import { useState } from "react";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import ActivityMaterials from "./component/activity/activityMaterials";
import { ScrollView } from "react-native-gesture-handler";
import ActivityInstructions from "./component/activity/activityInstructions";
import ActivityImages from "./component/activity/activiyImages";

export default function StartActivity() {
  const [tabSelected, setTabSelected] = useState("materials");
  const renderContent = (param: string) => {
    switch (param) {
      case "materials":
        return <ActivityMaterials />;
      case "instructions":
        return <ActivityInstructions />;
      default:
        return <ActivityImages />;
    }
  };
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <HeaderWithNotes />
        <Text style={styles.headerText}>Color Sorting</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={
              tabSelected === "materials" ? styles.tabButtonSelected : null
            }
            onPress={() => setTabSelected("materials")}
          >
            <Text
              style={
                tabSelected === "materials"
                  ? styles.tabTextSelected
                  : styles.tabText
              }
            >
              Materials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              tabSelected === "instructions" ? styles.tabButtonSelected : null
            }
            onPress={() => setTabSelected("instructions")}
          >
            <Text
              style={
                tabSelected === "instructions"
                  ? styles.tabTextSelected
                  : styles.tabText
              }
            >
              Instructions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tabSelected === "images" ? styles.tabButtonSelected : null}
            onPress={() => setTabSelected("images")}
          >
            <Text
              style={
                tabSelected === "images"
                  ? styles.tabTextSelected
                  : styles.tabText
              }
            >
              Images
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {renderContent(tabSelected)}
        </View>

        <View style={styles.footer}>
          <OneButtonFooter
            buttonText="Track Progress"
            buttonTo="../feedbackSurvey"
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabButtonSelected: {
    borderBottomWidth: 2,
    borderBottomColor: "#122AA5",
  },
  tabText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    color: "#3350E9",
  },
  tabTextSelected: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    color: "#122AA5",
  },
  contentContainer: {
    marginTop: 70,
  },
  footer: {
    marginTop: 36,
    marginBottom: 70,
  },
});
