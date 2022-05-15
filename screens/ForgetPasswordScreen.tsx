import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { sendResetEmail } from "../store/actions/forgetPassword";

export const ForgetPasswordScreen = () => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const dispatch = useDispatch<any>();

  const submitHandler = () => {
    dispatch(sendResetEmail(emailAddress));
  };
  return (
    <View style={styles.container}>
      <Text>Forget Password Screen</Text>
      <TextInput
        placeholder="emailaddress"
        value={emailAddress}
        onChangeText={setEmailAddress}
      />
      <Button title="SEND" onPress={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
