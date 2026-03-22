import { router } from "expo-router";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import ArrowLeft from "../../../assets/icons/arrowLeft.svg";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <ArrowLeft />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginLeft: 16,
  },
});
