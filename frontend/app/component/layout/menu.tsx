import { StyleSheet, View, TextInput } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Hamburger from "../../../assets/icons/hamburger.svg";
import { router } from "expo-router";
import Search from "../../../assets/icons/Search.svg";
import X from "../../../assets/icons/x.svg";

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
          style={{
            ...styles.optionStyle,
            backgroundColor: "#ECEFFF",
            paddingLeft: 15,
          }}
        >
          <View style={styles.searchBox}>
            <Search />
            <TextInput
              style={styles.textInput}
              placeholder="Search"
            ></TextInput>
            <X />
          </View>
        </MenuOption>
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
    marginTop: 34,
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
  searchBox: {
    width: 330,
    height: 48,
    borderColor: "#CBD0D7",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  textInput: {
    width: 250,
    marginLeft: 8,
    fontSize: 16,
    color: "#5D5D5D",
  },
});
