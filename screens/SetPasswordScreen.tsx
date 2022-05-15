import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SetPasswordProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { changePassword } from "../store/actions/forgetPassword";
import * as Linking from "expo-linking";
import { useDispatch } from "react-redux";

export const SetPasswordScreen = (props: SetPasswordProps) => {
  const { navigation } = props;

  const link2 = Linking.useURL();
  const dispatch = useDispatch<any>();

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
      const token = Linking.parse(link2!).queryParams!.token?.toString()!;

      if (!token) {
        // errorModal
      }

      dispatch(
        changePassword({
          password: userData.password,
          token: token,
        })
      );
      navigation.navigate("SignIn");
    } catch (e) {
      //errorModal
      throw e;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Forgot Password Screen</Text>
      <TextInput
        placeholder="password"
        value={userData.password}
        onChangeText={passwordChangeHandler}
      />
      <TextInput
        placeholder="confirmPassword"
        value={userData.confirmPassword}
        onChangeText={confirmPasswordChangeHandler}
      />
      <Button title={"SUBMIT"} onPress={submitHandler} />
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
