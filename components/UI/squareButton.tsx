import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
  Image,
} from "react-native";

interface SquareButtonProps {
  title: string;
  buttonStyle: object;
  titleStyle: object;
  onPress: () => void;
}

export const SquareButton = (props: SquareButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress } = props;

  return (
    <TouchableOpacity
      style={{ ...buttonStyle, ...styles.button }}
      onPress={onPress}
    >
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});
