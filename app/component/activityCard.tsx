import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TwoButtonFooter from "./footer/twoButtonFooter";

export default function ActivityCard() {
  const skills = [
    "Cognitive Skills",
    "Fine Motor Skills",
    "Gross Motor Skills",
    "Communication",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.activityImage}
          source={require("../../assets/background/activityImage1.png")}
        />
        <Image
          style={styles.dottedCircle}
          source={require("../../assets/background/dottedCircle.png")}
        />
      </View>
      <View style={styles.detailContainer}>
        <FlatList
          data={skills}
          renderItem={({ item }) => (
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
          horizontal
        />
        <Text style={styles.activityHeader}>Activity Name</Text>
        <Text style={styles.skillText}>
          Lorem ipsum dolor sit amet consectetur. Lacus ultrices duis fermentum
          ornare. Condimentum amet rutrum viverra fermentum orci. Lobortis
          molestie nulla varius tempus pretium pharetra id. Nunc congue arcu
          ipsum tincidunt et accumsan.
        </Text>
      </View>
      <View style={styles.footer}>
        <TwoButtonFooter
          height={40}
          width={140}
          buttonLeftText="View Details"
          buttonRightText="Start Activity"
          buttonLeftTo="../../activity/activityDetails"
          buttonRightTo="../../startActivity"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 338,
    height: 406,
    borderRadius: 8,
    marginBottom: 32,
    backgroundColor: "#FFFCFC",
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  background: {
    backgroundColor: "#4BD1EF",
    width: 338,
    height: 154,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  activityImage: {
    marginLeft: 14,
  },
  dottedCircle: {
    position: "absolute",
    right: 0,
  },
  detailContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  skillTag: {
    backgroundColor: "#DE8BF2",
    height: 30,
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  skillText: {
    fontFamily: "Arimo-Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  activityHeader: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
  footer: {
    padding: 16,
  },
});
