import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import HeaderWithNotes from "./component/header/headerWithNotes";
import { useState } from "react";
import OneButtonFooter from "./component/footer/oneButtonFooter";
import ActivityMaterials from "./activity/activityMaterials";
import { ScrollView } from "react-native-gesture-handler";
import ActivityInstructions from "./activity/activityInstructions";

export default function StartActivity() {
  const [tabSelected, setTabSelected] = useState("materials");
  const renderContent = (param: string) => {
    switch (param) {
      case "materials":
        return <ActivityMaterials />;
      case "instructions":
        return <ActivityInstructions />;
      default:
        return <ActivityMaterials />;
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
          <TouchableOpacity onPress={() => setTabSelected("materials")}>
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
          <TouchableOpacity onPress={() => setTabSelected("instructions")}>
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
          <TouchableOpacity onPress={() => setTabSelected("images")}>
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
          <OneButtonFooter buttonText="Track Progress" buttonTo="/" />
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
  tabButton: {},
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
    // borderColor: "#122AA5",
    // borderWidth: 2,
  },
  contentContainer: {
    marginTop: 70,
  },
  footer: {
    marginTop: 56,
    marginBottom: 32,
  },
});
