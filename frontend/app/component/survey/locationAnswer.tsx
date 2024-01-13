import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeButton from "../../../assets/icons/home.svg";
import OutsideButton from "../../../assets/icons/tree.svg";
import CarButton from "../../../assets/icons/car.svg";
import CommunityButton from "../../../assets/icons/community.svg";
import Caret from "../../../assets/icons/caret.svg";

interface locationAnswerProps {
  location: string;
  setLocation: (location: string) => void;
}

export default function LocationAnswer({
  location,
  setLocation,
}: locationAnswerProps) {
  return (
    <>
      <View style={styles.locationContainer}>
        <TouchableOpacity onPress={() => setLocation("home")}>
          <View
            style={
              location === "home"
                ? {
                    ...styles.locationButtonContainer,
                    backgroundColor: "#3350E9",
                  }
                : styles.locationButtonContainer
            }
          >
            <HomeButton color={location === "home" ? "#FFFFFF" : "#3350E9"} />
          </View>
          <Text style={styles.locationOptionsText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLocation("outside")}>
          <View
            style={
              location === "outside"
                ? {
                    ...styles.locationButtonContainer,
                    backgroundColor: "#3350E9",
                  }
                : styles.locationButtonContainer
            }
          >
            <OutsideButton
              color={location === "outside" ? "#FFFFFF" : "#3350E9"}
            />
          </View>
          <Text style={styles.locationOptionsText}>Outside</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLocation("car")}>
          <View
            style={
              location === "car"
                ? {
                    ...styles.locationButtonContainer,
                    backgroundColor: "#3350E9",
                  }
                : styles.locationButtonContainer
            }
          >
            <CarButton color={location === "car" ? "#FFFFFF" : "#3350E9"} />
          </View>
          <Text style={styles.locationOptionsText}>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLocation("community")}>
          <View
            style={
              location === "community"
                ? {
                    ...styles.locationButtonContainer,
                    backgroundColor: "#3350E9",
                  }
                : styles.locationButtonContainer
            }
          >
            <CommunityButton
              color={location === "community" ? "#FFFFFF" : "#3350E9"}
            />
          </View>
          <Text style={{ ...styles.locationOptionsText, left: -5 }}>
            Community
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>View More Locations</Text>
        <Caret />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
  locationButtonContainer: {
    borderColor: "#6F86FF",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 72,
    width: 72,
  },
  moreButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    marginRight: 8,
  },
});
