import { Stack } from "expo-router/stack";
import { Text, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import HamburgerMenu from "./component/menu";
import { MenuProvider } from "react-native-popup-menu";

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
    <MenuProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#A920C9",
          },
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={styles.headerText}>ParentApp</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View>
              <HamburgerMenu />
            </View>
          ),
        }}
      />
    </MenuProvider>
  );
}
const styles = StyleSheet.create({
  headerText: {
    color: "#FFFFFF",
    fontSize: 28,
    lineHeight: 42,
    fontWeight: "500",
    fontFamily: "Jost-Medium",
  },
});
