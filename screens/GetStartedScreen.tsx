import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GetStartedProps } from "../navigation/navigationUtils";

const GetStartedScreen = (props: GetStartedProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started screen</Text>
      <View style={styles.buttons}>
        <Button
          title="GO TO SIGN-IN"
          onPress={() => props.navigation.navigate("SignIn")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="GO TO SIGN-UP"
          onPress={() => props.navigation.navigate("SignUp")}
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

export default GetStartedScreen;
