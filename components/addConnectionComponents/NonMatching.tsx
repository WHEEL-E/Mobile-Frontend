import React from "react";
import { StyleSheet, Text } from "react-native";
import { HeadingText } from "../../utilities/types/fontTypes";

export const NonMatching = () => {
  return (
    <Text style={styles.text}>
      No users found, make sure you're typing the correct name
    </Text>
  );
};

const styles = StyleSheet.create({
  text: HeadingText,
});
