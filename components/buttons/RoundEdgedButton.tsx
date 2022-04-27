import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { roundEdgedButtonProps } from "../../utilities/types/buttonTypes";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";

const RoundEdgedButton = (props: roundEdgedButtonProps) => {
  const { title, backgroundColor, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, backgroundColor }}
    >
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundEdgedButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: "80%",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    backgroundColor: "green",
    alignSelf: "center",
  },
  titleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: DEVICE_WIDTH * 0.05,
  },
});
