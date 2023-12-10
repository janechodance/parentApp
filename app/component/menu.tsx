import { StyleSheet } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Hamburger from "../../assets/icons/hamburger.svg";
import { router } from "expo-router";

export default function HamburgerMenu() {
  return (
    <Menu>
      <MenuTrigger>
        <Hamburger />
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={styles.optionContainer}
        customStyles={{ optionText: styles.optionText }}
      >
        <MenuOption
          onSelect={() => router.push("/")}
          text="My Activity Finder"
        />
        <MenuOption onSelect={() => router.push("/explore")} text="Explore" />
        <MenuOption
          onSelect={() => router.push("/progressLog")}
          text="Progress Log"
        />
        <MenuOption onSelect={() => router.push("/calendar")} text="Calendar" />
        <MenuOption onSelect={() => router.push("/alerts")} text="Reminders" />
        <MenuOption onSelect={() => router.push("/profile")} text="Profile" />
        <MenuOption onSelect={() => router.push("/settings")} text="Settings" />
      </MenuOptions>
    </Menu>
  );
}
const styles = StyleSheet.create({
  optionContainer: {
    marginTop: 30,
    padding: 16,
  },
  optionText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
});
