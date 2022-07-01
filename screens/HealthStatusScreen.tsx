import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HealthStatusScreenProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const HealthStatusScreen = (props: HealthStatusScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HealthStatus</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HealthStatusScreen;
