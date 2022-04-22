import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { InputBackButtonProps } from "../../utilities/buttonsUtils";

export const BackButton = (props: InputBackButtonProps) => {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="arrow-back" color="#3F414E" size={35} onPress={onPress} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: DEVICE_WIDTH * 0.15,
    height: DEVICE_WIDTH * 0.15,
    borderRadius: DEVICE_WIDTH * 0.075,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#EBEAEC",
    borderWidth: 0.7,
  },
});
