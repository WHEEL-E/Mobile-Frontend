import React from "react";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { sendResetEmail } from "../store/actions/forgetPassword";
import { validateMail } from "../utilities/dataValidators";
import { NoteText } from "../utilities/types/fontTypes";

export const ForgetPasswordScreen = () => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();

  const mailChangeHandler = (text: string) => {
    setEmailAddress(text);
    setIsValid(validateMail(text) ? false : true);
  };

  const submitHandler = () => {
    dispatch(sendResetEmail(emailAddress));
  };
  return (
    <View style={styles.container}>
      <Text>Forget Password Screen</Text>
      <TextInput
        placeholder="emailaddress"
        value={emailAddress}
        onChangeText={mailChangeHandler}
      />
      {!isValid && (
        <Text style={styles.validationText}>
          {t("forgetPassword.validMail")}
        </Text>
      )}
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
  validationText: {
    color: "red",
    ...NoteText,
  },
});
