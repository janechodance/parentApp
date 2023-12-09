import { Image, StyleSheet } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

export default function HamburgerMenu() {
  return (
    <Menu>
      <MenuTrigger>
        <Image source={require("../../assets/icons/hamburger.png")}></Image>
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={styles.optionContainer}
        customStyles={{ optionText: styles.optionText }}
      >
        <MenuOption
          onSelect={() => console.log("1")}
          text="My Activity Finder"
        />
        <MenuOption onSelect={() => console.log("2")} text="Explore" />
        <MenuOption onSelect={() => console.log("2")} text="Progress Log" />
        <MenuOption onSelect={() => console.log("2")} text="Calendar" />
        <MenuOption onSelect={() => console.log("2")} text="Reminders" />
        <MenuOption onSelect={() => console.log("2")} text="Profile" />
        <MenuOption onSelect={() => console.log("2")} text="Settings" />
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
