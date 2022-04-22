import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SquareButtonProps } from "../../utilities/buttonsUtils";

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
});
