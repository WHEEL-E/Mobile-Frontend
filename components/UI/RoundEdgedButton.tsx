import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";

interface roundEdgedButtonProps {
  title: string;
  buttonStyle: object;
  titleStyle: object;
  onPress: () => void;
}

const RoundEdgedButton = (props: roundEdgedButtonProps) => {
  const { title, buttonStyle, titleStyle, onPress } = props;
  let TouchCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }

  return (
    <View>
      <TouchCmp style={{ ...buttonStyle, ...styles.button }} onPress={onPress}>
        <Text style={titleStyle}>{title}</Text>
      </TouchCmp>
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
