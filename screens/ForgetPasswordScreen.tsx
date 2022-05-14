import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { sendEmail } from "../utilities/forgetPasswordUtils";

export const ForgetPasswordScreen = () => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const dispatch = useDispatch<any>();

  const submitHandler = () => {
    // sendEmail(emailAddress, "").then(() => {
    //   console.log("Your message was successfully sent!");
    // });
    // checkIfEMailExists
    //if not--> error modal
    //else--> send the email

    dispatch(sendEmail());
  };
  return (
    // here users will enter their email address to receive the other screen with the token
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
