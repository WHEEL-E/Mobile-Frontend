import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SetPasswordProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import { changePassword, getToken } from "../store/actions/forgetPassword";
import * as Linking from "expo-linking";
import { getStateFromPath } from "@react-navigation/native";
import { useDispatch } from "react-redux";

export const SetPasswordScreen = (props: SetPasswordProps) => {
  const { navigation } = props;

  const link2 = Linking.useURL();
  const dispatch = useDispatch<any>();
  const getName = () => {
    console.log(Linking.parse(link2!).queryParams!.token);
  };

  const [userData, setUserData] = React.useState({
    password: "",
    confirmPassword: "",
  });

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
    try {
      dispatch(
        changePassword({
          password: userData.password,
          token: Linking.parse(link2!).queryParams!.token?.toString()!,
        })
      );
      navigation.navigate("SignIn");
    } catch (e) {
      //errorModal
      throw e;
    }
  };

  return (
    // here users will enter new password, this screen should receive
    // the email as prop and send a change request to back-end
    <View style={styles.container}>
      <Text>Forgot Password Screen</Text>
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
      <Button title={"SUBMIT"} onPress={getName} />
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
