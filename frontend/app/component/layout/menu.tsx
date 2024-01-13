import { StyleSheet } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Hamburger from "../../../assets/icons/hamburger.svg";
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
        <MenuOption text="search" style={styles.optionStyle}></MenuOption>
        <MenuOption
          onSelect={() => router.push("/")}
          text="My Activity Finder"
          style={styles.optionStyle}
        />
        <MenuOption
          onSelect={() => router.push("/explore")}
          text="Explore"
          style={styles.optionStyle}
        />
        <MenuOption
          onSelect={() => router.push("/progressLog")}
          text="Progress Log"
          style={styles.optionStyle}
        />
        <MenuOption
          onSelect={() => router.push("/calendar")}
          text="Calendar"
          style={styles.optionStyle}
        />
        <MenuOption
          onSelect={() => router.push("/alerts")}
          text="Reminders"
          style={styles.optionStyle}
        />
        <MenuOption
          onSelect={() => router.push("/profile")}
          text="Profile"
          style={styles.optionStyle}
        />
        <MenuOption
          onSelect={() => router.push("/settings")}
          text="Settings"
          style={styles.optionStyle}
        />
      </MenuOptions>
    </Menu>
  );
}
const styles = StyleSheet.create({
  optionContainer: {
    marginTop: 30,
    width: 360,
    height: 604,
  },
  optionText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  optionStyle: {
    height: 75,
    borderTopColor: "#CACACA",
    borderTopWidth: 1,
    paddingLeft: 26,
    justifyContent: "center",
  },
});
