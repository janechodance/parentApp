import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import ActivityImage2 from "../../../assets/background/activityImage2.svg";

interface categoryCardProps {
  category: string;
  imageSource?: ImageSourcePropType | undefined;
}

export default function CategoryCard({
  category,
  imageSource,
}: categoryCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.background}>
        {imageSource ? (
          <Image
            source={imageSource}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            resizeMode="cover"
          />
        ) : (
          <ActivityImage2 />
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 157,
    borderRadius: 8,
    backgroundColor: "#FFFCFC",
    shadowColor: "#E5E5E5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  background: {
    width: "100%",
    height: 147,
    backgroundColor: "#B8DE1F",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  contentContainer: {
    padding: 16,
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    alignSelf: "flex-start",
  },
});
