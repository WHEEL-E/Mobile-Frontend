import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SignUpProps } from "../navigation/navigationUtils";
import InputField from "../components/UI/InputField";

const SignUpScreen = (props: SignUpProps) => {
  const [email, setEmail] = useState("");
  const setEmailHandler = (enteredMail: string) => {
    setEmail(enteredMail);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up screen</Text>
      <View style={styles.buttons}>
        <Button
          title="GO TO Home Screen"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
      <ScrollView>
        <InputField
          placeHolder="Email address"
          fieldStyle={{
            width: 320,
            height: 60,
          }}
          autoComplete="email"
          value={email}
          onChangeText={setEmailHandler}
        />
      </ScrollView>
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

export default SignUpScreen;
