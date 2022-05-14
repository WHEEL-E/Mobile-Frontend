import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SetPasswordProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";

export const SetPasswordScreen = (props: SetPasswordProps) => {
  const { navigation } = props;

  const [userData, setUserData] = React.useState({
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const emailChangeHandler = (value: string) => {
    setUserData({ ...userData, emailAddress: value });
  };

  const passwordChangeHandler = (value: string) => {
    setUserData({ ...userData, password: value });
  };

  const confirmPasswordChangeHandler = (value: string) => {
    setUserData({ ...userData, confirmPassword: value });
  };

  const submitHandler = () => {
    if (userData.password !== userData.confirmPassword) {
      //errorModal
    }
    //send change request
    navigation.navigate("SignIn");
  };

  return (
    // here users will enter new password, this screen should receive
    // the email as prop and send a change request to back-end
    <View style={styles.container}>
      <Text>Forgot Password Screen</Text>
      <TextInput
        placeholder="email address"
        value={userData.emailAddress}
        onChangeText={emailChangeHandler}
      />
      <TextInput
        placeholder="password"
        value={userData.password}
        onChangeText={passwordChangeHandler}
      />
      <TextInput
        placeholder="confirmPassword"
        value={userData.password}
        onChangeText={confirmPasswordChangeHandler}
      />
      <Button title="SUBMIT" onPress={submitHandler} />
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
