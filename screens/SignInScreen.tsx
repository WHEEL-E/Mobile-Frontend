import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SignInProps } from "../navigation/navigationUtils";

const SignInScreen = (props: SignInProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in screen</Text>
      <View style={styles.buttons}>
        <Button
          title="GO TO Home Screen"
          onPress={() => props.navigation.navigate("Home")}
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

export default SignInScreen;
