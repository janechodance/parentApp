import { Stack } from "expo-router/stack";
import { Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function Layout() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Jost-Medium": require("../assets/fonts/Jost-Medium.ttf"),
        "Jost-Bold": require("../assets/fonts/Jost-Bold.ttf"),
        "Arimo-Regular": require("../assets/fonts/Arimo-Regular.ttf"),
        "Arimo-Italic": require("../assets/fonts/Arimo-Italic.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={styles.headerText}>ParentApp</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image source={require("../assets/icons/hamburger.png")} />
            </TouchableOpacity>
          ),
        }}
      />
    </>
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
