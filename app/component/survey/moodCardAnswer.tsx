import { View, StyleSheet, Text } from "react-native";
import Green from "../../../assets/mood/green.svg";
import Blue from "../../../assets/mood/blue.svg";
import Yellow from "../../../assets/mood/yellow.svg";
import Orange from "../../../assets/mood/orange.svg";
import Red from "../../../assets/mood/red.svg";
import { Slider } from "@miblanchard/react-native-slider";
import { useState } from "react";

interface moodCardAnswerProps {
  feedback?: boolean;
}
export default function MoodCardAnswer({ feedback }: moodCardAnswerProps) {
  const [level, setLevel] = useState(3);
  const renderMoodImage = () => {
    switch (level) {
      case 0:
        return <Red width={35} height={35} />;
      case 1:
        return <Orange width={35} height={35} />;
      case 2:
        return <Yellow width={35} height={35} />;
      case 3:
        return <Blue width={35} height={35} />;
      case 4:
        return <Green width={35} height={35} />;
      default:
        return <Blue width={35} height={35} />;
    }
  };
  const renderMoodText = () => {
    switch (level) {
      case 0:
        return <Text>Awful</Text>;
      case 1:
        return <Text>Not so good</Text>;
      case 2:
        return <Text>Okay</Text>;
      case 3:
        return <Text>Good</Text>;
      case 4:
        return <Text>Great</Text>;
      default:
        return <Text>Good</Text>;
    }
  };
  const renderFeedbackText = () => {
    switch (level) {
      case 0:
        return <Text>Don't like it</Text>;
      case 1:
        return <Text>Not so much</Text>;
      case 2:
        return <Text>Okay</Text>;
      case 3:
        return <Text>Like it</Text>;
      case 4:
        return <Text>Love it</Text>;
      default:
        return <Text>Like it</Text>;
    }
  };
  return (
    <View style={styles.container}>
      {renderMoodImage()}
      <Text style={styles.headerText}>
        {feedback ? renderFeedbackText() : renderMoodText()}
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={4}
        step={1}
        maximumTrackTintColor="#ECEFFF"
        minimumTrackTintColor="#ECEFFF"
        thumbImage={require("../../../assets/icons/handle.png")}
        trackStyle={{ height: 8, borderRadius: 100, width: 256 }}
        onValueChange={(value) => setLevel(value[0])}
        value={level}
      />
      <View style={styles.moodsContainer}>
        <Red />
        <Orange />
        <Yellow />
        <Blue />
        <Green />
      </View>
      <View style={styles.moodsContainer}>
        {feedback ? (
          <>
            <Text style={styles.text}>Hate</Text>
            <Text style={styles.text}>Love</Text>
          </>
        ) : (
          <>
            <Text style={styles.text}>Awful</Text>
            <Text style={styles.text}>Great</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 202,
    borderRadius: 8,
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 8,
  },
  moodsContainer: {
    flexDirection: "row",
    width: 260,
    justifyContent: "space-between",
  },
  text: {
    marginTop: 2,
    fontFamily: "Arimo-Regular",
    fontSize: 10,
    lineHeight: 15,
  },
});
