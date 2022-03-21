import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MainButtonProps {
  title: string;
  buttonStyle: object;
  titleStyle: object;
  onPress: () => void;
  icon: { name: any; size: number; color: string };
  image: { url: any };
  hasIcon: boolean;
}

export const MainButton = (props: MainButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress, icon, image } = props;

  if (props.hasIcon) {
    return (
      <TouchableOpacity
        style={{ ...buttonStyle, ...styles.button }}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <Ionicons name={icon.name} size={icon.size} color={icon.color} />
        </View>
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{ ...buttonStyle, ...styles.button }}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image source={image.url} style={{ ...styles.image }} />
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
