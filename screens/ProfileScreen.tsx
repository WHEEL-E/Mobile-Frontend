import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProfileProps } from "../navigation/navigationUtils";

const ProfileScreen = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
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
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
});

export default ProfileScreen;
