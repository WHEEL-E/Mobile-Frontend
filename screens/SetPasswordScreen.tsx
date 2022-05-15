import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SetPasswordProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { changePassword } from "../store/actions/forgetPassword";
import * as Linking from "expo-linking";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { NoteText } from "../utilities/types/fontTypes";
import {
  validatePassword,
  validateMatching,
} from "../utilities/dataValidators";
import { ShowModal } from "../store/actions/errorModal";

export const SetPasswordScreen = (props: SetPasswordProps) => {
  const { navigation } = props;

  const link = Linking.useURL();
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();

  const [userData, setUserData] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const [isValid, setIsValid] = React.useState({
    confirmPassword: false,
    password: false,
  });

  const passwordChangeHandler = (value: string) => {
    setUserData({ ...userData, password: value });
    setIsValid({
      ...isValid,
      password: validatePassword(value) ? false : true,
    });
  };

  const confirmPasswordChangeHandler = (value: string) => {
    setUserData({ ...userData, confirmPassword: value });
    setIsValid({
      ...isValid,
      password: validateMatching(value, userData.password) ? false : true,
    });
  };

  const submitResetPasswordHandler = () => {
    if (!(isValid.confirmPassword && isValid.password)) {
      return;
    }
    try {
      const token = Linking.parse(link!).queryParams!.token?.toString()!;

      if (!token) {
        dispatch(ShowModal("errorModal.resetPassword"));
      }

      dispatch(
        changePassword({
          password: userData.password,
          token: token,
        })
      );
      navigation.navigate("SignIn");
    } catch (e) {
      dispatch(ShowModal("errorModal.resetPassword"));
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
      {!isValid.password && (
        <Text style={styles.validationText}>
          {t("forgetPassword.validPassword")}
        </Text>
      )}
      <TextInput
        placeholder="confirmPassword"
        value={userData.confirmPassword}
        onChangeText={confirmPasswordChangeHandler}
      />
      {!isValid.confirmPassword && (
        <Text style={styles.validationText}>
          {t("forgetPassword.matchingPassword")}
        </Text>
      )}
      <Button title={"SUBMIT"} onPress={submitResetPasswordHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  validationText: {
    color: "red",
    ...NoteText,
  },
});
