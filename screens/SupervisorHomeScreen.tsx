import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SupervisorHomeProps } from "../navigation/navigationUtils";

const SupervisorHomeScreen = (props: SupervisorHomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supervisor home Screen</Text>
      <View style={styles.buttons}>
        <Button
          title="GO TO PROFILE"
          onPress={() => props.navigation.navigate("Profile")}
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
    width: 200,
  },
});

export default SupervisorHomeScreen;
