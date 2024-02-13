import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import TwoButtonFooter from "../footer/twoButtonFooter";
import DottedCircle from "../../../assets/background/dottedCircle.svg";
import ActivitySkills from "../activity/activitySkills";
import { useActivity } from "../../context/activityContext";
import { Activity } from "../../customtypes/types";

interface activityCardProps {
  activity: Activity;
  name: string;
  description: string;
  primarySkillsIds: number[];
  secondarySkillsIds: number[];
}
export default function ActivityCard({
  activity,
  name,
  description,
  primarySkillsIds,
  secondarySkillsIds,
}: activityCardProps) {
  const { setActivity } = useActivity();
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.activityImage}
          source={require("../../../assets/background/activityImage1.png")}
        />
        <View style={styles.dottedCircle}>
          <DottedCircle />
        </View>
      </View>
      <View style={styles.detailContainer}>
        <ActivitySkills
          primarySkillsIds={primarySkillsIds}
          secondarySkillsIds={secondarySkillsIds}
          activityCard
        />
        <Text style={styles.activityHeader}>{name}</Text>
        <Text style={styles.skillText}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <TwoButtonFooter
          height={40}
          width={140}
          buttonLeftText="View Details"
          buttonRightText="Start Activity"
          buttonLeftTo="/activityDetails"
          buttonRightTo="/startActivity"
          onPress={() => setActivity(activity)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 338,
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
