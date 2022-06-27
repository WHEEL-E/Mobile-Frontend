import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import InputField from "../components/inputs/InputField";
import { sendResetEmail } from "../store/actions/forgetPassword";
import colors from "../utilities/constants/colors";
import { SMALL_MARGIN_VERTICAL } from "../utilities/constants/spacing";
import { validateMail } from "../utilities/dataValidators";
import { NormalText, NoteText } from "../utilities/types/fontTypes";
import { BaseScreen } from "../components/ForgetPasswordComponents/BaseScreen";

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
    if (!isValid) {
      return;
    }
    dispatch(sendResetEmail(emailAddress, dispatch));
  };
  return (
    <BaseScreen title={t("forgetPassword.forgetPassword")}>
      <Text style={styles.fieldTitle}>{t("forgetPassword.mailAddress")}</Text>
      <InputField
        placeHolder="mail@example.com"
        value={emailAddress}
        onChangeText={mailChangeHandler}
        fieldStyle={styles.inputField}
        autoComplete="email"
      />
      {!isValid && (
        <Text style={styles.validationText}>
          {t("forgetPassword.validMail")}
        </Text>
      )}
      <RoundEdgedButton
        title={t("forgetPassword.resetPassword")}
        backgroundColor={colors.darkGreen}
        onPress={submitHandler}
      />
      <Text style={styles.resetText}>{t("forgetPassword.resetText")}</Text>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  validationText: {
    color: "red",
    marginBottom: "10%",
    ...NoteText,
  },
  inputField: {
    width: "80%",
    backgroundColor: colors.lightPurple,
  },
  resetText: {
    color: colors.darkBlue,
    opacity: 0.7,
    marginTop: SMALL_MARGIN_VERTICAL,
    ...NoteText,
  },
  fieldTitle: {
    ...NormalText,
    width: "80%",
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
});
