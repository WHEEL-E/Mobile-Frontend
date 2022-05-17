import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import {
  HeadingText,
  ScreenNameText,
  TitleText,
} from "../../utilities/types/fontTypes";

export const NonMatching = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No users found, make sure you're typing the correct name
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: colors.lightPurple,
    borderRadius: 50,
    marginVertical: "20%",
    padding: "5%",
  },
  text: { ...ScreenNameText, textAlign: "center" },
});
