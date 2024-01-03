import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageUpload() {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Upload Your Photos</Text>
      <Text style={styles.descriptionText}>
        This could be for personal use or to share with your therapist
      </Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: 178,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderColor: "#4663FF",
    borderStyle: "dashed",
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
  descriptionText: {
    marginTop: 16,
    fontFamily: "Arimo-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#6D6D6D",
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    borderColor: "#3350E9",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
});
