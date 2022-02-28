import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomeProps } from "../navigation/navigationUtils";

const HomeScreen = (props: HomeProps) => {
  // Should contain the logic of choosing between patient homeScreen and supervisor homeScreen
  // According to signIn information
  return (
    <View style={styles.container}>
      <Text style={styles.title}>go to Profile</Text>
      <View style={styles.buttons}>
        <Button
          title="GO TO SUPERVISOR HOME SCREEN"
          onPress={() => props.navigation.navigate("SupervisorHome")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="GO TO PATIENT HOME SCREEN"
          onPress={() => props.navigation.navigate("PatientHome")}
        />
      </View>
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
  buttons: {
    margin: 10,
    width: 300,
  },
});

export default HomeScreen;
