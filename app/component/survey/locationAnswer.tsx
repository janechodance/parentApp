import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeButton from "../../../assets/icons/home.svg";
import OutsideButton from "../../../assets/icons/tree.svg";
import CarButton from "../../../assets/icons/car.svg";
import StoreButton from "../../../assets/icons/store.svg";
import Caret from "../../../assets/icons/caret.svg";

export default function LocationAnswer() {
  return (
    <>
      <View style={styles.locationContainer}>
        <TouchableOpacity>
          <View style={styles.locationButtonContainer}>
            <HomeButton />
          </View>
          <Text style={styles.locationOptionsText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.locationButtonContainer}>
            <OutsideButton />
          </View>
          <Text style={styles.locationOptionsText}>Outside</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.locationButtonContainer}>
            <CarButton />
          </View>
          <Text style={styles.locationOptionsText}>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.locationButtonContainer}>
            <StoreButton />
          </View>
          <Text style={styles.locationOptionsText}>Store</Text>
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
