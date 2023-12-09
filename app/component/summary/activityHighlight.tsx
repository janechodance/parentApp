import { View, Text, StyleSheet } from "react-native";
import HomeSolid from "../../../assets/icons/homeSolid.svg";
import People from "../../../assets/icons/people.svg";
import Material from "../../../assets/icons/cube.svg";
import Time from "../../../assets/icons/clock.svg";

interface activityHighlightProps {
  complete: boolean;
}
export default function ActivityHighlight({
  complete,
}: activityHighlightProps) {
  return (
    <View>
      <Text style={styles.headerText}>Activity Highlights</Text>
      {complete ? (
        <Text style={styles.headerContentText}>
          Congratulations on completing this activity! This achievement is a
          testament to your commitment, so keep harnessing this momentum for
          more accomplishments ahead.
        </Text>
      ) : (
        <Text style={styles.headerContentText}>
          Remember, progress isn't about completing tasks, but the effort you
          invest along the way. Embrace every step you've taken, knowing that
          each one brings you closer to your goals.
        </Text>
      )}
      {complete ? (
        <>
          <View style={styles.highlightRowContainer}>
            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>Location</Text>
              <HomeSolid />
            </View>
            <View style={styles.highlightBox}>
              <View style={styles.highlightHeaderBox}>
                <People />
                <Text style={{ ...styles.highlightText, marginLeft: 8 }}>
                  People
                </Text>
              </View>

              <Text style={styles.highlightContentText}>Max and Lee</Text>
            </View>
          </View>
          <View style={styles.highlightRowContainer}>
            <View style={styles.highlightBox}>
              <View style={styles.highlightHeaderBox}>
                <Material />
                <Text style={{ ...styles.highlightText, marginLeft: 8 }}>
                  Materials
                </Text>
              </View>
              <Text style={styles.highlightContentText}>Blocks & AAC</Text>
            </View>
            <View style={styles.highlightBox}>
              <View style={styles.highlightHeaderBox}>
                <Time />
                <Text style={{ ...styles.highlightText, marginLeft: 8 }}>
                  Duration
                </Text>
              </View>
              <Text style={styles.highlightContentText}>15 minutes</Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.highlightRowContainer}>
            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>Location</Text>
              <HomeSolid />
            </View>
            <View style={styles.highlightBox}>
              <Text style={{ ...styles.highlightText, width: 122 }}>
                You set a reminder to talk to your therapist!
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 28,
    lineHeight: 42,
    marginTop: 64,
  },
  headerContentText: {
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  highlightRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  highlightBox: {
    borderRadius: 20,
    backgroundColor: "#703C7E",
    height: 152,
    width: 165,
    alignItems: "center",
    justifyContent: "center",
  },
  highlightHeaderBox: {
    flexDirection: "row",
  },
  highlightText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  highlightContentText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    color: "#FFFFFF",
  },
});
