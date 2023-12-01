import { Stack } from "expo-router/stack";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
export default function Header() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#A920C9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: "",
        headerTitleAlign: "left",
        headerLeft: () => <Text style={styles.headerText}>ParentApp</Text>,
        headerRight: () => (
          <TouchableOpacity>
            <Image source={require("../assets/hamburger.png")} />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
const styles = StyleSheet.create({
  headerText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "500",
    fontFamily: "Jost-Medium",
  },
});
