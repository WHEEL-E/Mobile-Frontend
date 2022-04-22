import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainButtonProps } from "../../utilities/buttonsUtils";

export const MainButton = (props: MainButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress, icon, image } = props;

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...buttonStyle }}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        {icon && (
          <Ionicons name={icon.name} size={icon.size} color={icon.color} />
        )}
        {image && <Image source={image.url} style={{ ...styles.image }} />}
      </View>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "60%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
});
