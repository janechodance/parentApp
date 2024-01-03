import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HomeButton from "../../../assets/icons/homeSolidSmall.svg";
import Explore from "../../../assets/icons/binoculars.svg";
import Progress from "../../../assets/icons/progress.svg";
import Calendar from "../../../assets/icons/calendar.svg";
import Reminder from "../../../assets/icons/notification.svg";
import { router } from "expo-router";

export default function BottomNavigation() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => router.push("/")}
        style={styles.footerButton}
      >
        <HomeButton />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/explore")}
        style={styles.footerButton}
      >
        <Explore />
        <Text style={styles.footerText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/progressLog")}
        style={styles.footerButton}
      >
        <Progress />
        <Text style={styles.footerText}>Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/calendar")}
        style={styles.footerButton}
      >
        <Calendar />
        <Text style={styles.footerText}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/alerts")}
        style={styles.footerButton}
      >
        <Reminder />
        <Text style={styles.footerText}>Alerts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 65,
    backgroundColor: "#A920C9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  footerButton: {
    flexDirection: "column",
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Arimo-Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#FFFFFF",
  },
});
