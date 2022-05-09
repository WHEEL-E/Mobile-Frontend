import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SoundSettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SoundSettingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SoundSettingScreen;
