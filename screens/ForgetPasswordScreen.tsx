import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import * as ExpoLinking from "expo-linking";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import InputField from "../components/inputs/InputField";
import { sendResetEmail } from "../store/actions/forgetPassword";
import colors from "../utilities/constants/colors";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";
import { validateMail } from "../utilities/dataValidators";
import {
  NormalText,
  NoteText,
  ScreenNameText,
} from "../utilities/types/fontTypes";

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
    dispatch(sendResetEmail(emailAddress));
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/cloud-background.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-b-app.png")}
        />
        <Text style={styles.title}>{t("forgetPassword.forgetPassword")}</Text>
        <Image
          source={require("../assets/images/forgot-password-ICON.png")}
          resizeMode="contain"
          style={styles.image}
        />
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "35%",
    paddingBottom: "20%",
  },
  logo: {
    height: 50,
    resizeMode: "center",
    width: "100%",
    alignSelf: "center",
  },
  title: {
    ...ScreenNameText,
    marginVertical: BIG_MARGIN_VERTICAL,
  },
  image: {
    width: "80%",
    height: "40%",
    marginVertical: BIG_MARGIN_VERTICAL,
  },
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
