import React from "react";
import { StyleSheet, Text } from "react-native";
import { HeadingText } from "../../utilities/types/fontTypes";

export const Loading = () => {
  return <Text style={styles.text}>Loading...</Text>;
};

const styles = StyleSheet.create({
  text: HeadingText,
});
