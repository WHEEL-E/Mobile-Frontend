import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface roundEdgedButtonProps {
  title: string;
  buttonStyle: object;
  titleStyle: object;
  onPress: () => void;
}

const RoundEdgedButton = (props: roundEdgedButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress } = props;
  return (
    <View>
      <TouchableOpacity
        style={{ ...buttonStyle, ...styles.button }}
        onPress={onPress}
      >
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundEdgedButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 55,
  },
});
