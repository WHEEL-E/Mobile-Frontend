import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SquareButtonProps } from "../../utilities/types/buttonTypes";

export const SquareButton = (props: SquareButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress, disabled } = props;

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...buttonStyle }}
      onPress={onPress}
      disabled={disabled}
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
